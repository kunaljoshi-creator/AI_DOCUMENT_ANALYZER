# Use official slim Python image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy all source code
COPY . .

# Create uploads directory (if used)
RUN mkdir -p /app/uploads

# Expose FastAPI port
EXPOSE 8000

# Start the FastAPI app directly (no wait-for-db needed for Render-hosted DB)
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
