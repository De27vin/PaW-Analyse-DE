import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

file_path = "../plot_data/bereinigt_bundeshaushalt_2021-2023.csv"

df = pd.read_csv(file_path)


years = ["2021", "2022", "2023"]

einnahmen = df.loc[df["Kategorie"] == "Einnahmen", ["2021", "2022", "2023"]].values[0]
ausgaben = df.loc[df["Kategorie"] == "Ausgaben", ["2021", "2022", "2023"]].values[0]

x = np.arange(len(years))
width = 0.25

fig, ax = plt.subplots(figsize=(10, 6))

balken_einnahmen = ax.bar(x - width/2, einnahmen, width, label="Einnahmen", color='green')
balken_ausgaben = ax.bar(x + width/2, ausgaben, width, label="Ausgaben", color='firebrick')

# Beschreibt verschiedene Grössen
ax.set_xlabel("Jahre")
ax.set_ylabel("Betrag in Milliarden Euro")
ax.set_title("Zieleinnahmen vs. Ausgaben der Ampelkoalition")
ax.set_xticks(x)
ax.set_xticklabels(years)
ax.legend()

plt.tight_layout()
plt.show()
