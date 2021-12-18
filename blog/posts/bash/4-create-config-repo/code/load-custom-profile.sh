#!/bin/bash

# verify $SETTINGS_FILE is empty
if [[ -z "$SETTINGS_FILE" ]]; then
    echo "no SETTINGS_FILE provided"
    return -1
fi

# verify the path at $SETTINGS_FILE exists
if [ ! -f $SETTINGS_FILE ]; then
    echo "SETTINGS_FILE path does not exists"
    return -1
fi

# export variables
for command in "$(jq -r 'to_entries | .[] | "export " + .key + "=" + (.value | @sh) ' <$SETTINGS_FILE)"; do
    eval $command
done

# source functions and aliases
for i in $SCRIPTS_FOLDER/*.sh; do source "$i"; done

# List the bookmarks when opening the terminal
listBookmarks
