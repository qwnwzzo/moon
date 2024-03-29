#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
hugo

# 进入生成的文件夹
cd public

git init
git add -A
git commit -m 'feat: deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:qwnwzzo/moon.git main:gh-pages

cd ../