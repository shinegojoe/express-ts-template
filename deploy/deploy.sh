pwd
npm run build
tar -zcvf dist.tar.gz dist
node deploy.js
rm tsconfig.tsbuildinfo
rm -r dist
rm dist.tar.gz