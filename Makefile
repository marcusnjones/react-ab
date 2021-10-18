SHELL := $(shell which bash)

YOUR_HOSTNAME := $(shell hostname | cut -d "." -f1 | awk '{print $1}')

export HOST_IP=$(shell curl ipv4.icanhazip.com 2>/dev/null)

username := $(shell git config --get github.user)
container_name := $(shell basename -s .git `git config --get remote.origin.url`)

GIT_BRANCH  = $(shell git rev-parse --abbrev-ref HEAD)
GIT_SHA     = $(shell git rev-parse HEAD)
BUILD_DATE  = $(shell date -u +"%Y-%m-%dT%H:%M:%SZ")

TAG ?= $(VERSION)
ifeq ($(TAG),@branch)
	override TAG = $(shell git symbolic-ref --short HEAD)
	@echo $(value TAG)
endif

# verify that certain variables have been defined off the bat
check_defined = \
    $(foreach 1,$1,$(__check_defined))
__check_defined = \
    $(if $(value $1),, \
      $(error Undefined $1$(if $(value 2), ($(strip $2)))))

list_allowed_args := name inventory

# shims
mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
current_dir := $(notdir $(patsubst %/,%,$(dir $(mkfile_path))))

.PHONY: list help dev-build dev-build-force prod-build prod-build-force dev-up dev-up-force prod-up prod-up-force dev-run dev-down prod-run prod-down dev-run-force prod-run-force

help:
	@echo "Make commands for provisioning $(container_name)"

list:
	@$(MAKE) -qp | awk -F':' '/^[a-zA-Z0-9][^$#\/\t=]*:([^=]|$$)/ {split($$1,A,/ /);for(i in A)print A[i]}' | sort

dev-build:
	docker-compose -f docker-compose.dev.yml build

dev-build-force:
	docker-compose -f docker-compose.dev.yml build --no-cache

dev-up:
	docker-compose -f docker-compose.dev.yml up

dev-up-force:
	docker-compose -f docker-compose.dev.yml up --force-recreate

dev-run: dev-build dev-up

dev-run-force: dev-build-force dev-up-force

dev-down:
	docker-compose -f docker-compose.dev.yml down --remove-orphans

prod-build:
	docker-compose -f docker-compose.prod.yml build

prod-build-force:
	docker-compose -f docker-compose.prod.yml build --no-cache

prod-up:
	docker-compose -f docker-compose.prod.yml up

prod-up-force:
	docker-compose -f docker-compose.prod.yml up --force-recreate

prod-run: prod-build prod-up

prod-run-force: prod-build-force prod-up-force

prod-down:
	docker-compose -f docker-compose.dev.yml down --remove-orphans
