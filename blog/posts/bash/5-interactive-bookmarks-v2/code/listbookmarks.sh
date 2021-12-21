#!/bin/bash

listBookmarks() {
    local selectedBookmark=$(
        cat $BOOKMARKS_FILE |
            jq -r '["NAME", "PATH"], (.[] |
            [.name,.path]) |
            @tsv' |
            column -t |
            fzf --tac
    )

    if [[ -n $selectedBookmark ]]; then
        local bookmarkPath=$(
            echo $selectedBookmark |
                tr -s ' ' |
                cut -f2 -d ' '
        )
        cd $bookmarkPath
        lsf "code"
    else
        cd $LOCAL_REPOS
    fi
}
export listBookmarks

lsf() {
    local command=$1

    local chosenDir=$(ls | fzf)
    if [[ -n $chosenDir ]]; then
        cd $chosenDir
        if [[ -n $command ]]; then
            eval "\$command ."
        fi
    fi
}
export lsf
