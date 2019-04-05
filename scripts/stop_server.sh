#!/usr/bin/env bash
echo "script buenicimo"
pm2 start ./cdf/bin/www
pm2 stop www
