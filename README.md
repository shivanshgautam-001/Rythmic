# Rythmic
# Heart Disease Risk Prediction

## Introduction

This documentation presents a project aimed at leveraging machine learning techniques to predict the risk of heart disease based on its relation to gut microbiome and menstrual cycle. The project utilizes a dataset comprising various physiological and biological features to train multiple classification models. The ultimate goal is to accurately classify individuals as either having or not having heart disease based on these features.

## About

**Heart:** The heart is a muscular organ that pumps blood throughout the body, while heart diseases encompass various conditions including coronary issues, arrhythmias, and congenital anomalies, often triggered by factors like inactivity, high cholesterol, smoking, obesity, poor diet, diabetes, and hypertension.

**Menstrual Cycle:** The menstrual cycle, regulated by female hormones, entails regular bleeding known as periods, starting with the shedding of the uterine lining and preparing the body for potential pregnancy; lasting typically between 24 and 38 days, it involves the release of estrogen and progesterone from the ovaries to build up the uterine lining.

**Gut Microbiota:** Gut microbiota refers to the collection of microorganisms residing in the gastrointestinal system, aiding in energy extraction and comprising bacteria, fungi, viruses, and other entities. Its composition fluctuates with dietary patterns and hormonal shifts, influencing physiological processes like inflammation and metabolism.

## Relation of Gut Microbiota, Menstrual Cycle, and Heart Disease

The menstrual cycle initiates changes in hormone levels, particularly estrogen and progesterone, which affect the composition of gut microbiota and metabolic functions. During the luteal phase, there is an increase in markers of inflammation. An imbalance in gut microbiota, known as dysbiosis, may lead to increased intestinal permeability and systemic inflammation, which can contribute to cardiovascular issues. Prolonged chronic inflammation can elevate the risk of developing cardiovascular diseases, potentially resulting in the formation of arterial plaque and blockages, worsening heart conditions.

This is the relation between Heart disease, gut microbiota/microbiome, and the menstrual cycle.

## Dataset Generation

Synthetic data is generated for various features, including microbial diversity, microbial abundance, menstrual cycle length, hormonal patterns, blood pressure (systolic and diastolic), cholesterol levels, and BMI. The target variable indicates the presence (1) or absence (0) of heart disease. The generated data is stored in a CSV file.

## Data Preprocessing

Upon loading the dataset, relevant features are extracted and categorized into microbiome-related features, menstrual cycle-related features, and cardiovascular-related features. Features related to the microbiome and cardiovascular health are standardized using StandardScaler.

## Model Training and Evaluation

Multiple classification algorithms are trained on the preprocessed data, including:

- **Logistic Regression**
- **Random Forest Classifier**
- **Support Vector Machine**
- **XGBoost**
- **K-Nearest Neighbors**
- **Decision Tree**

The models' performance is evaluated using accuracy scores and classification reports.

## Machine Learning Model Overview

- **Logistic Regression:** A statistical method for analyzing a dataset in which there are one or more independent variables that determine an outcome. It's commonly used for binary classification problems.

- **Random Forest Classifier:** An ensemble learning method that constructs a multitude of decision trees during training and outputs the class that is the mode of the classes (classification) or mean prediction (regression) of the individual trees.

- **Support Vector Machine:** A supervised learning algorithm used for classification and regression tasks. It separates data points into different classes/groups by finding the hyperplane that best divides the dataset into classes.

- **XGBoost:** An implementation of gradient boosted decision trees designed for speed and performance. It sequentially builds decision trees, with each tree learning from the errors of the previous one.

- **K-Nearest Neighbors:** A non-parametric classification algorithm that assigns a class to a data point based on the majority class of its k-nearest neighbors.

- **Decision Tree:** A decision support tool that uses a tree-like model of decisions and their possible consequences. It breaks down a dataset into smaller subsets while at the same time, an associated decision tree is incrementally developed.

## Model Comparison

The accuracies of different models are compared and presented in a tabular format, sorted in descending order of accuracy.

## Heart Disease Risk Prediction Function

A function named "predict_heart_disease_risk" is defined to predict heart disease risk for an individual based on their input features. The function standardizes the input data using pre-fit StandardScaler objects and makes predictions using trained models. Various machine learning models, including Logistic Regression, Random Forest Classifier, Support Vector Machine, XGBoost, K-Nearest Neighbors, and Decision Tree, are employed for prediction.

## Prediction Demonstration

Sample inputs are provided to demonstrate how heart disease risk prediction can be performed using various machine-learning models. The "predict_heart_disease_risk" function is invoked with these sample inputs to showcase the prediction process.

## Conclusion

This project offers a comprehensive demonstration of utilizing machine learning for heart disease risk prediction. It incorporates diverse features and multiple classification algorithms to enhance accuracy and reliability. The predictive models developed in this project have the potential to assist healthcare professionals in identifying individuals at higher risk of heart disease, enabling early intervention and preventive measures.

## Web Development

The website is developed using HTML, CSS, and JavaScript, without employing any JavaScript libraries or frameworks. It incorporates prediction parameters obtained from a machine learning model, including factors such as Microbial Diversity, Microbial Abundance, Menstrual Cycle, Hormonal Pattern, Systolic Blood Pressure, Diastolic Blood Pressure, Cholesterol Level, and Body Mass Index (BMI). These parameters are utilized to provide insights or predictions related to various health aspects on the website.
