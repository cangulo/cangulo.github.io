# update this to your scripts folder
scriptsFolder="YOUR_PATH/scripts"

# source all scripts (instead of `source`, we could use `.` both are the same command)
for i in $scriptsFolder/*.sh; do source "$i"; done
