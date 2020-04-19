# Create  gh-pages

### Create an orphan branch named gh-pages
git checkout --orphan gh-pages

### Remove all files from staging
git rm -rf .

### Create an empty commit so that you will be able to push on the branch next
git commit --allow-empty -m "Init empty branch"

### Push the branch
git push origin gh-pages

### Come back to master
git checkout master

### Set worktree
git worktree add dist gh-pages

## Note 
if cannot set worktree to dist remove /dist first
then build again and checkout under /dist

ex.
git worktree list
C:/personal/baozi       be86432 [master]
C:/personal/baozi/dist  c1e992a [gh-pages] 