# Baozi
List of chinese vocabs

### Doing :bulb:
- [1] List of vocabs 
### Features :flags:
:mahjong: List of vocabs
:mahjong: Exercises
:mahjong: Pinned vocabs
:mahjong: Styling
:mahjong: More languages for meaning (Thai, English)
:mahjong: Update table data
### TODO :memo:
- Styling :lollipop:
    - different font (pinyin, meaning)
    - responsive
    - A+, A- feature
    - alignment (grid || spacing)
- gh-page (already, need to be updated; details below)
- Update data
    - meanings
    - orders words with id, reuse with pinned words and exercises
    - add exercises
    - 
#### Create  gh-pages
```
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
```

ex.
git worktree list
C:/personal/baozi       be86432 [master]
C:/personal/baozi/dist  c1e992a [gh-pages] 
