import sys
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'pillow', 'scipy', 'numpy'])
    from PIL import Image

import numpy as np
from scipy.cluster.vq import kmeans, vq

def get_dominant_colors(image_path, num_clusters=5):
    img = Image.open(image_path).convert('RGBA')
    img = img.resize((150, 150))
    arr = np.array(img)
    
    # Filter out transparent pixels
    arr = arr[arr[:, :, 3] > 50]
    
    pixels = arr[:, :3].astype(float)
    if len(pixels) == 0:
        return []

    centroids, _ = kmeans(pixels, num_clusters)
    
    # Sort centroids by how many pixels belong to them
    q, _ = vq(pixels, centroids)
    counts = np.bincount(q, minlength=num_clusters)
    sorted_idx = np.argsort(counts)[::-1]
    
    colors = []
    for i in sorted_idx:
        c = centroids[i]
        hex_color = '#{:02x}{:02x}{:02x}'.format(int(c[0]), int(c[1]), int(c[2]))
        colors.append(hex_color)
    
    return colors

colors = get_dominant_colors('public/andes-logo.png')
print("Dominant colors:", colors)
