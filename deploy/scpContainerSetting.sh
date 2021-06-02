pwd
# scp package.json taka@203.204.160.248:/home/taka/project/deploy/vocabulary-trainer-server
# scp -r config taka@203.204.160.248:/home/taka/project/deploy/vocabulary-trainer-server
# scp -r deploy taka@203.204.160.248:/home/taka/project/deploy/vocabulary-trainer-server
# scp  vocabulary.db taka@203.204.160.248:/home/taka/project/deploy/vocabulary-trainer-server
npm run build
tar -zcvf dist.tar.gz dist
scp dist.tar.gz dist taka@203.204.160.248:/home/taka/project/deploy/vocabulary-trainer-server

