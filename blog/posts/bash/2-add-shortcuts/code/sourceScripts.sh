# update this to your scripts folder
scriptsFolder="YOUR_PATH/scripts"

# source all scripts (`.` and `source` are the same commands)
for i in $scriptsFolder/*.sh; do source "$i"; done
