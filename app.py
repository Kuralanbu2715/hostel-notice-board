from flask import Flask, request, jsonify, render_template
from datetime import datetime
from waitress import serve

app = Flask(__name__)

notices = []

@app.route('/')
def home():
    return render_template('student.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/api/notices', methods=['GET'])
def get_notices():
    return jsonify(notices)

@app.route('/api/notices', methods=['POST'])
def add_notice():
    data = request.json
    notice = {
        "title": data.get("title"),
        "message": data.get("message"),
        "date": datetime.now().strftime("%d-%m-%Y %H:%M")
    }
    notices.append(notice)
    return jsonify({"status": "Notice added successfully"}), 201


if __name__ == "__main__":
    serve(app, host="0.0.0.0", port=5000)
