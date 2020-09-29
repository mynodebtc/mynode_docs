# Repairing Drive

- If the startup script detects any file corruption in the external drive, it will initiate `fsck` which might take several hours
- The homepage will be stuck at **Repairing Drive** without any feedback of what's happening
- Advanced user can follow the progress but checking the log at `/tmp/fsck_results`

## Data corruption
- USB port of SBCs are not well-suited for running 24/7, so there's a chance that data on external drive can get corrupted
- Data corruption is also possible when device is moved without shutting it down first
- Lose connection is also a problem
- Having a good enclosure, adapter cable and power supply is critical for keeping it running 24/7
- Raspi may not be a solution for long-term and the user should plan to upgrade to a dedicated desktop (or mini PC) or spare laptop, where the SSD/HDD connections are more robust
- On encountering data corruption, solutions range from reindexing the chain-state to full replacement of the drive
  - reindexing just the chain-state takes few hours
  - full reindexing takes a day maybe
  - downloading the blockchain from scratch takes few days
  - reformatting the drive is quick but must be followed by syncing from scratch or copying from a backup
  - unusable drives must be replaced altogether which will be formatted automatically
