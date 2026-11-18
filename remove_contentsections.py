#!/usr/bin/env python3
with open('/Users/farhantariq/Desktop/VisaDirect/src/data/servicesData.ts', 'r') as f:
    content = f.read()

# Remove the contentSections block for sports-person-visa
# The block starts with 'contentSections: [{' and ends with '}]\n]'
# We need to find and remove it

# Find the sports-person-visa entry and remove contentSections
import re

# Pattern to find contentSections in sports-person-visa entry
# We'll replace the entire contentSections section with nothing
pattern = r'  contentSections: \[.*?\]:\s*\n\s*\]}'

# Actually, let's just remove the contentSections from line 7470 onwards until the entry ends
# The sports-person-visa entry has specific line numbers

# Simpler approach: just remove the contentSections array and its contents
# The entry starts with 'id: "sports-person-visa"' and ends before the next 'id:'

# Find the sports-person-visa entry section
lines = content.split('\n')
new_lines = []
in_sports_entry = False
skip_contentsections = False

for i, line in enumerate(lines):
    if 'id: "sports-person-visa"' in line:
        in_sports_entry = True
        new_lines.append(line)
    elif in_sports_entry and 'id:' in line and 'sports-person-visa' not in line:
        # We've reached the next entry
        in_sports_entry = False
        new_lines.append(line)
    elif in_sports_entry:
        # Skip contentSections and related lines within the sports entry
        if 'contentSections:' in line:
            skip_contentsections = True
            continue
        elif skip_contentsections and line.strip() == ']':
            # This might be the closing bracket - check if it's the right one
            # Look ahead to see if the next line is the entry closing
            skip_contentsections = False
            # Keep this line if it's not part of contentSections
            new_lines.append(line)
        else:
            continue
    else:
        new_lines.append(line)

with open('/Users/farhantariq/Desktop/VisaDirect/src/data/servicesData.ts', 'w') as f:
    f.write('\n'.join(new_lines))
print('Done')