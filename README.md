# Redshoe Casino fronent starter

```shell
ssh-keygen -t ed25519 -C "your_email@example.com"
eval "$(ssh-agent -s)"
ssh-add -K ~/.ssh/id_ed25519
```

```
cd ~/Templates/elbet-core/elbet-cms
git pull origin master
cd ~/Templates/elbet-core/
git status
git add ~/Templates/elbet-core/elbet-cms
git submodule update --remote --merge
git commit -m "elbet-core updated submodule elbet-cms current"
git push --recurse-submodules=on-demand 
```
