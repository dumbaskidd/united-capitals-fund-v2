import os

replacements = {
    # Backgrounds
    "bg-[#030712]": "bg-[#f8f9fa]",
    "bg-[#0b1220]": "bg-white",
    "bg-[#0f172a]": "bg-white",
    
    # Text colors
    "text-white": "text-[#38404b]",
    "text-slate-200": "text-[#38404b]/90",
    "text-slate-300": "text-[#38404b]/80",
    "text-slate-400": "text-[#38404b]/70",
    "text-slate-500": "text-[#38404b]/60",
    
    # Accents
    "text-sky-400": "text-[#72563f]",
    "text-sky-300": "text-[#8c6b4e]",
    "hover:text-sky-400": "hover:text-[#72563f]",
    "hover:text-sky-300": "hover:text-[#8c6b4e]",
    
    # Buttons
    "bg-[#eab308]": "bg-[#72563f]",
    "hover:bg-[#facc15]": "hover:bg-[#8c6b4e]",
    "text-[#eab308]": "text-[#72563f]",
    
    # Borders
    "border-white/10": "border-[#38404b]/10",
    "border-white/5": "border-[#38404b]/5",
    "border-white/20": "border-[#38404b]/20",
    
    # Other specifics
    "from-[#030712]": "from-[#f8f9fa]",
    "from-[#0b1220]": "from-white",
    "via-[#030712]": "via-[#f8f9fa]",
    "to-[#030712]": "to-[#f8f9fa]",
    "to-[#0b1220]": "to-white",
    "bg-white text-[#030712]": "bg-[#38404b] text-white",
    "bg-white text-slate-900": "bg-[#38404b] text-white",
    "hover:bg-slate-100": "hover:bg-[#38404b]/90",
    "hover:bg-slate-200": "hover:bg-[#38404b]/80",
}

def replace_in_files(directory):
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in root or '.next' in root or '.git' in root:
            continue
        for file in files:
            if not (file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.css')):
                continue
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            original_content = content
            for old, new in replacements.items():
                content = content.replace(old, new)
                
            if content != original_content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {path}")

replace_in_files('src')
