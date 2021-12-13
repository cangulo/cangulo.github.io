#!/bin/bash

if [ ! -s $SETTINGS_FILE ]; then
    echo "no json settings provided"
    return -1
fi

# export variables
for command in "$(jq -r 'to_entries | .[] | "export " + .key + "=" + (.value | @sh) ' <$SETTINGS_FILE)"; do
    eval $command
done

# source functions and aliases
for i in $SCRIPTS_FOLDER/*.sh; do source "$i"; done
