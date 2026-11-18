with open('/Users/farhantariq/Desktop/VisaDirect/src/data/servicesData.ts', 'r') as f:
    content = f.read()

# Replace literal \n with a placeholder
content = content.replace('\\\\n', '\\\\nTEMP\\\\n')

with open('/Users/farhantariq/Desktop/VisaDirect/src/data/servicesData.ts', 'w') as f:
    f.write(content)
print('Fixed')