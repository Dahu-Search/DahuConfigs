#!/usr/bin/env bash
gcloud config set project dahu-aodocs-test
gcloud config set compute/zone europe-west2-b
gcloud container clusters get-credentials dahu-autocluster

