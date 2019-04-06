#!/bin/bash
sudo yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_11.x | sudo -E bash -
sudo yum install nodejs -y

#install agente codedeploy
  sudo yum install ruby -y
  sudo yum install wget -y
  cd /home/ec2-user
  wget https://aws-codedeploy-us-east-1.s3.amazonaws.com/latest/install
  chmod +x ./install
  sudo ./install auto


sudo amazon-linux-extras install epel -y
sudo yum install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx

sudo npm i -g pm2
sudo pm2 update
sudo pm2 startup
sudo pm2 startup systemd
sudo pm2 save


rm /var/tmp/aws-mon/instance-id
sleep 30
sudo pm2 kill
sudo pm2 delete all
sudo pm2 start /home/ec2-user/cdf
sudo pm2 save
sudo pm2 log
------------------------------------------------------------------------------------------
#!/bin/bash
sudo yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_11.x | sudo -E bash -
sudo yum install nodejs -y
sudo yum install ruby -y
sudo yum install wget -y
cd /home/ec2-user
wget https://aws-codedeploy-us-east-1.s3.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
sudo amazon-linux-extras install epel -y
sudo yum install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx
sudo npm i -g pm2
sudo pm2 update
sudo pm2 startup
sudo pm2 startup systemd
sudo pm2 save
---------------------------------------

sudo nano /etc/yum.repos.d/mongodb-org-4.0.repo
[mongodb-org-4.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/4.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc

sudo yum install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod
