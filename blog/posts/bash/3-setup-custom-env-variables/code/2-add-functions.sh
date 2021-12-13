#!/bin/bash

# add this at the end of your profile, after the variables declaration

alias goToRepos="cd $localRepos"
alias goToDocs="cd $localDocuments"

listBookmarks() {
    local pathSelected=$(cat $bookmarksFile |
        jq -r '.[]' |
        fzf)

    if [[ -n "$pathSelected" ]]; then
        cd $pathSelected
    else
        echo "no bookmark selected"
    fi
}
