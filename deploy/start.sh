tar -zxvf vocabulary-trainer-server.tar.gz
NODE_ENV=production pm2 start npm -- run start:dev --name vocabulary-trainer-server
