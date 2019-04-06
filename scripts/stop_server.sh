#!/usr/bin/env bash
echo "script buenicimdddddddo"
pm2 start ./cdf/bin/www --name "server"
pm2 stop server
