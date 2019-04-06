#!/bin/bash
echo "script buenoniseeeeesss"
pm2 start ./cdf/bin/www --name "server"
pm2 start server
