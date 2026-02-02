import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

SMTP_MAIL = os.getenv("SMTP_MAIL")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
SMTP_HOST = os.getenv("SMTP_HOST")
SMTP_PORT = int(os.getenv("SMTP_PORT"))

def send_booking_email(data: dict):
    msg = MIMEMultipart()
    msg["From"] = SMTP_MAIL

    # 👇 HOTEL + USER dono
    msg["To"] = f"{SMTP_MAIL}, {data['email']}"

    msg["Subject"] = "Booking Confirmation - Hotel Balaji Lodging"

    masked_aadhaar = "XXXX-XXXX-" + data["aadhaar"][-4:]

    body = f"""
Dear {data['name']},

✅ Your booking enquiry has been received successfully!

Here are your details:
--------------------------------
Name: {data['name']}
Email: {data['email']}
Contact: {data['contact']}
Check-in: {data['checkIn']}
Check-out: {data['checkOut']}
Address: {data['address']}
Aadhaar: {masked_aadhaar}
--------------------------------

📞 We will contact you shortly to confirm availability.

Thank you for choosing
Hotel Balaji Lodging 🙏
"""

    msg.attach(MIMEText(body, "plain"))

    server = smtplib.SMTP(SMTP_HOST, SMTP_PORT)
    server.starttls()
    server.login(SMTP_MAIL, SMTP_PASSWORD)
    server.send_message(msg)
    server.quit()
