
# 抛出错误
set -e

git init

git add .

git commit -m 'egg-first'

git remote -v

git remote add orgin git@github.com:huang-1234/first-egg-application.git

git push git@github.com:huang-1234/first-egg-application.git master