#!/bin/bash

listBookmarks() {
    local bookmarksFile=./bookmarks.json

    local pathSelected=$(cat $bookmarksFile |
        jq -r '.[]' |
        fzf)

    if [[ -n "${pathSelected}" ]]; then
        cd $pathSelected
    else
        echo "no bookmark selected"
    fi
}
