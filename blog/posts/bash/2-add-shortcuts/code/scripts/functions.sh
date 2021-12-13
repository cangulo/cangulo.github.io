#!/bin/bash

openRepoUrl() {
    gitUrl=$(git remote get-url --all origin)
    repoUrl="${gitUrl%".git"}" # Removing .git prefix
    if [[ -n "$repoUrl" ]]; then
        echo "repoUrl:$repoUrl"
        xdg-open $repoUrl
    fi
}

# REQUIRES fzf, this list the current folder interactively

lsf() {
    local chosenDir=$(ls | fzf)
    if [[ -n "$chosenDir" ]]; then
        cd $chosenDir
    fi
}
