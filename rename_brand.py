import os
import glob

def replace_in_files(directory, old, new):
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in root or '.next' in root or '.git' in root:
            continue
        for file in files:
            if not (file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.json') or file.endswith('.md')):
                continue
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            if old in content:
                new_content = content.replace(old, new)
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {path}")

replace_in_files('src', 'United Capitals', 'Andes Capital')
replace_in_files('src', 'UNITED CAPITALS', 'ANDES CAPITAL')
