import matplotlib.pyplot as plt

from matplotlib.ticker import MultipleLocator

import numpy as np

import pandas as pd

data_bpl = pd.read_csv("../plot_data/bpl.csv", header=4, sep=";")
data_bpl_2023 = data_bpl[['2023', 'Land']]
data_bpl_2023 = data_bpl_2023.drop(0)
data_bpl_2023 = data_bpl_2023.drop(data_bpl_2023.index[16:30])
data_bpl_2023['2023'] = pd.to_numeric(data_bpl_2023['2023'], errors='coerce')
print(data_bpl_2023)
x_axis = data_bpl_2023['2023']
y_axis = data_bpl_2023['Land']
plt.barh(y_axis, x_axis)
plt.xlim(0, 1000)
plt.gca().xaxis.set_major_locator(MultipleLocator(100)) 
plt.xlabel('BiP')
plt.ylabel('Land')
plt.title('BiP pro Bundesland aus dem Jahr 2023')
print(x_axis)
print(y_axis)
plt.show()
