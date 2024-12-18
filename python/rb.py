import matplotlib.pyplot as plt

from matplotlib.ticker import MultipleLocator

import numpy as np

import pandas as pd

data_rb = pd.read_csv("../plot_data/rb.csv")
print(data_rb)

x_axis = data_rb['Jahr']
y_axis = data_rb['Regelsatz_Alleinstehend_in_Euro']
plt.plot(x_axis, y_axis)
plt.xticks(x_axis, rotation=45)
plt.gca().yaxis.set_major_locator(MultipleLocator(50))
plt.ylim(350, 600)
plt.xlabel("Jahr")
plt.ylabel("Regelsatz in Euro")
plt.title("Regelsatz für Bürgergeld von 2011-2024") 
plt.show()
