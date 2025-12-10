# ==============================================================================
#             PART 1: Setup and Importing Necessary Libraries
# ==============================================================================

import pandas as pd
import numpy as np
import re
import time
import nltk
import tkinter as tk  د
from tkinter import messagebox, simpledialog
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import MultinomialNB
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# ======================= TWEAKABLE SETTINGS =============================
FILE_PATH = 'Samples.csv'
TEXT_COLUMN = 'review_text'  # Name of the text column (reviews)
LABEL_COLUMN = 'sentiment'   # Name of the classification column (Positive/Negative/Neutral)
RANDOM_SEED = 42 # To give the same resulte

# Natural Language Processing (NLP) Tools Setup - (Prepared for English, must be adjusted for Arabic)
# Download required NLTK data
nltk.download('stopwords', quiet=True)
nltk.download('wordnet', quiet=True)
nltk.download('punkt', quiet=True)
stop_words = set(stopwords.words('english'))
lemmatizer = WordNetLemmatizer()
# ==============================================================================
#             PART 2: Pre-processing Functions (No Change)
# ==============================================================================

def clean_text(text):
    """
    Text cleaning: Removing punctuation, numbers, symbols, and converting text to lowercase.
    """
    if pd.isna(text):
        return ""
    # Remove punctuation and numbers
    text = re.sub(r'[^\w\s]', ' ', str(text)) 
    text = re.sub(r'\d+', '', text)
    # Convert text to lowercase
    text = text.lower()
    return text

def tokenize_and_lemmatize(text):
    """
    Tokenization, Lemmatization, and Stop Words Removal.
    """
    tokens = text.split()
    # Lemmatization
    tokens = [lemmatizer.lemmatize(word) for word in tokens]
    # Remove stop words
    tokens = [word for word in tokens if word not in stop_words]
    return ' '.join(tokens)

def load_and_preprocess_data(file_path, text_col, label_col):
    """
    Load data and apply the pre-processing pipeline.
    """
    print(f"🔗 Attempting to load data from: {file_path}")
    try:
        df = pd.read_csv(file_path, encoding='cp1252')
    except FileNotFoundError:
        print(f"❌ Error: File {file_path} not found. Please check the path.")
        return None, None, None
    
    # Handle missing values (necessary for model integrity)
    df.dropna(subset=[text_col, label_col], inplace=True)
    
    # Apply cleaning functions
    print("🧹 Starting data cleaning and processing phase...")
    df['cleaned_text'] = df[text_col].apply(clean_text)
    df['processed_text'] = df['cleaned_text'].apply(tokenize_and_lemmatize)
    print("✅ Data processing complete.")
    
    # Split data into features (X) and labels (y)
    X = df['processed_text']
    y = df[label_col]
    
    # Split data into training and testing (80% train, 20% test)
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=RANDOM_SEED
    )
    
    print(f"\n📊 Training set size: {X_train.shape[0]} samples.")
    print(f"📊 Testing set size: {X_test.shape[0]} samples.")
    
    return X_train, X_test, y_train, y_test

# ==============================================================================
#             PART 3: Model Training and Evaluation Functions (No Change)
# ==============================================================================

def evaluate_model(model_name, model, X_test_vec, y_true, duration):
    """
    Print a comprehensive model evaluation report (covering Accuracy, Classification Report, Confusion Matrix requirements).
    """
    y_pred = model.predict(X_test_vec)
    accuracy = accuracy_score(y_true, y_pred)

    print(f"\n--- 📈 Model Evaluation: {model_name} ---")
    print(f"⏱️ Training Duration: {duration:.2f} seconds")
    print(f"**Overall Accuracy: {accuracy:.4f}**")
    
    # Classification Report (includes Precision, Recall, F1-score)
    print("\n Classification Report:\n")
    print(classification_report(y_true, y_pred, zero_division=0))
    
    # Confusion Matrix
    print(" Confusion Matrix:\n")
    print(confusion_matrix(y_true, y_pred))
    print("-" * 70)
    
    return accuracy, model

def train_and_evaluate_baselines(X_train_vec, X_test_vec, y_train, y_test):
    """
    Train and evaluate the three baseline models (to meet the comparison criterion).
    """
    models = {
        "1. Logistic Regression": LogisticRegression(solver='liblinear', random_state=RANDOM_SEED, max_iter=1000),
        "2. Multinomial Naive Bayes": MultinomialNB(),
        "3. Random Forest Classifier": RandomForestClassifier(n_estimators=100, random_state=RANDOM_SEED)
    }

    results = []
    trained_models = {}
    best_accuracy = -1
    best_model_name = ""
    best_model_object = None

    for name, model in models.items():
        start_time = time.time()
        
        # Model training
        model.fit(X_train_vec, y_train)
        end_time = time.time()
        
        duration = end_time - start_time
        accuracy, model_object = evaluate_model(name, model, X_test_vec, y_test, duration)
        
        results.append({'Model': name, 'Accuracy': accuracy, 'Duration (s)': duration})
        trained_models[name] = model_object
        
        if accuracy > best_accuracy:
            best_accuracy = accuracy
            best_model_name = name
            best_model_object = model_object

    print("\n--- 🏁 Baseline Model Performance Summary 🏁 ---")
    summary_df = pd.DataFrame(results).sort_values(by='Accuracy', ascending=False).set_index('Model')
    print(summary_df)
    print("-" * 70)
    
    return summary_df, best_model_name, best_model_object

# ==============================================================================
#             PART 4: Hyperparameter Tuning (No Change)
# ==============================================================================

def tune_best_model(model_object, model_name, X_train_vec, y_train, X_test_vec, y_test):
    """
    Apply GridSearchCV to the best chosen model (to meet the excellence and refinement criterion).
    """
    print(f"\n⚙️ Starting Hyperparameter Tuning process for model: {model_name}...")
    
    # Example of tuning parameters: Use different parameters based on the best model
    if "Logistic Regression" in model_name:
        param_grid = {
            'C': [0.1, 1, 10],       # Regularization strength
            'penalty': ['l2']        # Regularization type
        }
    elif "Random Forest" in model_name:
        param_grid = {
            'n_estimators': [100, 200], # Number of trees
            'max_depth': [None, 10]      # Maximum tree depth
        }
    else:
        # If no tuning grid is defined, skip the step
        print("Skipping: No tuning grid prepared for this model.")
        return model_object, 0.0

    # Setup GridSearchCV (Grid Search)
    grid_search = GridSearchCV(
        estimator=model_object, 
        param_grid=param_grid, 
        cv=3,                      # 3-fold cross-validation
        scoring='accuracy', 
        verbose=1, 
        n_jobs=-1                  # Use all processor cores
    )
    
    start_time = time.time()
    grid_search.fit(X_train_vec, y_train)
    end_time = time.time()
    
    tuning_duration = end_time - start_time
    best_model = grid_search.best_estimator_
    best_params = grid_search.best_params_
    
    print("\n--- 🌟 Tuning Results 🌟 ---")
    print(f"Best parameters found: {best_params}")
    
    # Evaluate the optimized model
    accuracy_tuned, _ = evaluate_model(
        f"Tuned: {model_name}", 
        best_model, 
        X_test_vec, 
        y_test, 
        tuning_duration
    )
    
    return best_model, accuracy_tuned


# ==============================================================================
#             PART 5: Main Execution Block (Modified for GUI)
# ==============================================================================

if __name__ == "__main__":
    
    root = tk.Tk()
    root.withdraw() 
    
    # 1. Load and Pre-process Data
    X_train, X_test, y_train, y_test = load_and_preprocess_data(FILE_PATH, TEXT_COLUMN, LABEL_COLUMN)
    
    if X_train is None:
        exit()

    # 2. Feature Extraction (TF-IDF)
    print("\n🚀 Starting Feature Extraction using TF-IDF...")
    tfidf_vectorizer = TfidfVectorizer(max_features=5000, ngram_range=(1, 2)) # Using (1, 2) for increased power
    X_train_vectorized = tfidf_vectorizer.fit_transform(X_train)
    X_test_vectorized = tfidf_vectorizer.transform(X_test)
    print("✅ Feature extraction complete.")

    # 3. Train and Evaluate Baselines
    summary_df, best_model_name, best_model_object = train_and_evaluate_baselines(
        X_train_vectorized, X_test_vectorized, y_train, y_test
    )

    # 4. Hyperparameter Tuning on the Best Model
    final_best_model, final_accuracy = tune_best_model(
        best_model_object, best_model_name, X_train_vectorized, y_train, X_test_vectorized, y_test
    )

    # 5. Display Final Results via Message Box
    final_results_message = (
        f"Model: {final_best_model.__class__.__name__}\n"
        f"Accuracy: {final_accuracy:.4f}\n"
        "\nResults are also printed in the terminal for technical details (Classification Report, Confusion Matrix)."
    )
    messagebox.showinfo(
        "⭐⭐⭐ Final Project Results Summary ⭐⭐⭐", 
        final_results_message
    )
    
    # The original print statements remain for the terminal log (Good for technical users)
    print("\n" + "=" * 80)
    print("⭐⭐⭐ Final Project Results Summary ⭐⭐⭐".center(80))
    print("The best model was selected and tuning was applied to ensure the highest accuracy.")
    print(f"The Final Tuned Model is: {final_best_model.__class__.__name__}")
    print(f"Best Final Accuracy on Test Data: {final_accuracy:.4f}")
    print("=" * 80)

# ==============================================================================
#             PART 6: Prediction on New Manual Inputs (Modified for GUI)
# ==============================================================================

def predict_new_review(text, model, vectorizer):
    """
    Apply pre-processing and prediction to a single new text.
    """
    # 1. Cleaning and NLP Pre-processing
    cleaned_text = clean_text(text)
    processed_text = tokenize_and_lemmatize(cleaned_text)

    # 2. Vectorization
    text_vectorized = vectorizer.transform([processed_text]) 

    # 3. Prediction
    prediction = model.predict(text_vectorized)
    
    return prediction[0]

# --- Manual Input Test ---
print("\n" + "=" * 50)
print("Manual Prediction Test (Check GUI Dialog)".center(50))
print("=" * 50)

# 💡 NEW: Use simpledialog to get input from a window
user_input = simpledialog.askstring(
    "Manual Prediction Test", 
    "Enter a new review for analysis:",
    parent=root # Ensure the dialog is tied to the hidden root window
)

if user_input:
    predicted_sentiment = predict_new_review(
        user_input, 
        final_best_model, 
        tfidf_vectorizer
    )
    
    # 💡 NEW: Display the final prediction in a message box
    messagebox.showinfo(
        "Prediction Result", 
        f"Input Text: '{user_input[:50]}...'\n\nPredicted Sentiment: **{predicted_sentiment}**"
    )
    
    # The original print statements remain for the terminal log
    print(f"\n⬅️ Input Text: '{user_input}'")

    print(f"➡️ **Predicted Sentiment: {predicted_sentiment}**")
