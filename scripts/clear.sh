#!/bin/bash
if [ -d /home/ec2-user/cdf]; then
  # directorio existe.
  rm -rf /home/ec2-user/cdf
fi
