import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Check, X, Star, 
  Wifi, Coffee, Car, Shield, Zap, Home, Instagram, Facebook, MessageCircle,
  ChevronLeft, ChevronRight, User, Calendar, Hash
} from 'lucide-react';
import { hotelInfo, roomCategories, guestReviews, idPolicy, nearbyAttractions, amenities } from '../mockData';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

const HotelLanding = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    contact: '',
    address: '',
    aadhaar: ''
  });

  const galleryImages = roomCategories.map(room => room.image);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Booking request:', formData);
    toast.success('Booking request submitted! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      checkIn: '',
      checkOut: '',
      contact: '',
      address: '',
      aadhaar: ''
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleWhatsAppBooking = () => {
    window.open(hotelInfo.whatsapp, '_blank');
  };

  return (
    <div className="hotel-landing">
      {/* Header */}
      <header className="header-nav">
        <div className="container">
          <div className="nav-content">
            <h1 className="logo-text">HOTEL BALAJI LODGING</h1>
            <div className="nav-actions">
              <a href={hotelInfo.instagram} target="_blank" rel="noopener noreferrer" className="btn-nav">
                <Instagram size={18} />
              </a>
              <a href={hotelInfo.facebook} target="_blank" rel="noopener noreferrer" className="btn-nav">
                <Facebook size={18} />
              </a>
              <a href={`tel:${hotelInfo.phone[0]}`} className="btn-secondary">
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-announcement">
            <MapPin size={14} />
            <span>Amode, Shirpur, Maharashtra</span>
          </div>
          <h1 className="heading-hero">Your Comfortable Stay in Shirpur</h1>
          <p className="hero-subtitle body-large">
            Budget-friendly accommodation with clean rooms, peaceful environment, and courteous service
          </p>
          <div className="hero-cta">
            <button onClick={handleWhatsAppBooking} className="btn-primary">
              <MessageCircle size={18} />
              <span>Book on WhatsApp</span>
            </button>
            <a href="#contact" className="btn-secondary">
              <span>Enquire Now</span>
            </a>
          </div>
          <div className="hero-info">
            <div className="info-item">
              <Clock size={18} />
              <span className="mono-text">Check-in: {hotelInfo.checkIn}</span>
            </div>
            <div className="info-item">
              <Clock size={18} />
              <span className="mono-text">Check-out: {hotelInfo.checkOut}</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">About Hotel Balaji Lodging</h2>
            <p className="body-large text-secondary">{hotelInfo.description}</p>
          </div>
          <div className="about-content">
            <p className="body-medium">
              Our lodging is ideal for business travelers, families, and individual guests who are looking for a safe and convenient place to stay. With easy accessibility and essential amenities, we ensure a hassle-free experience throughout your visit.
            </p>
            <p className="body-medium">
              At Hotel Balaji Lodging, guest comfort and safety are our top priorities. We maintain hygiene standards and a friendly atmosphere so you can feel at home away from home.
            </p>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="amenities-section section-padding bg-section">
        <div className="container">
          <h2 className="heading-1 text-center">Amenities & Facilities</h2>
          <div className="amenities-grid">
            {amenities.map((amenity, index) => (
              <div key={index} className="amenity-card">
                <Check size={20} className="amenity-icon" />
                <span className="body-medium">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="rooms-section section-padding">
        <div className="container">
          <h2 className="heading-1 text-center">Room Categories & Rates</h2>
          <p className="body-medium text-center text-secondary section-subtitle">
            Choose from our range of comfortable rooms
          </p>
          <div className="rooms-grid">
            {roomCategories.map((room) => (
              <Card key={room.id} className="room-card">
                <div className="room-image">
                  <img src={room.image} alt={`${room.name} ${room.type}`} />
                  <div className="room-badge">{room.type}</div>
                </div>
                <CardHeader>
                  <CardTitle className="heading-3">{room.name}</CardTitle>
                  <div className="room-price">
                    <span className="price-currency">₹</span>
                    <span className="price-amount">{room.price}</span>
                    <span className="price-period body-small">/night</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="room-features">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="body-small">
                        <Check size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={handleWhatsAppBooking} className="btn-primary btn-full">
                    Book This Room
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section section-padding bg-section">
        <div className="container">
          <h2 className="heading-1 text-center">Photo Gallery</h2>
          <div className="gallery-container">
            <button onClick={prevImage} className="gallery-btn gallery-btn-prev">
              <ChevronLeft size={24} />
            </button>
            <div className="gallery-image-container">
              <img 
                src={galleryImages[currentImageIndex]} 
                alt={`Hotel room ${currentImageIndex + 1}`}
                className="gallery-image"
              />
            </div>
            <button onClick={nextImage} className="gallery-btn gallery-btn-next">
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="gallery-dots">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`gallery-dot ${idx === currentImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section section-padding">
        <div className="container">
          <h2 className="heading-1 text-center">Guest Reviews</h2>
          <div className="reviews-grid">
            {guestReviews.map((review) => (
              <Card key={review.id} className="review-card">
                <CardHeader>
                  <div className="review-header">
                    <div className="review-avatar">
                      <User size={24} />
                    </div>
                    <div>
                      <CardTitle className="heading-3">{review.name}</CardTitle>
                      <p className="caption">{review.date}</p>
                    </div>
                  </div>
                  <div className="review-rating">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} size={16} fill="currentColor" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="body-medium">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ID Policy Section */}
      <section className="policy-section section-padding bg-section">
        <div className="container">
          <div className="policy-content">
            <h2 className="heading-1">{idPolicy.title}</h2>
            <p className="body-medium text-secondary">{idPolicy.note}</p>
            <div className="policy-grid">
              <div className="policy-card policy-accepted">
                <h3 className="heading-3">Accepted ID Proof</h3>
                <ul className="policy-list">
                  {idPolicy.accepted.map((item, idx) => (
                    <li key={idx} className="body-medium">
                      <Check size={20} className="policy-icon-accepted" />
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="policy-card policy-rejected">
                <h3 className="heading-3">Not Accepted</h3>
                <ul className="policy-list">
                  {idPolicy.notAccepted.map((item, idx) => (
                    <li key={idx} className="body-medium">
                      <X size={20} className="policy-icon-rejected" />
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="contact-section section-padding">
        <div className="container">
          <h2 className="heading-1 text-center">Book Your Stay</h2>
          <p className="body-medium text-center text-secondary section-subtitle">
            Fill in your details and we'll get back to you shortly
          </p>
          <div className="contact-grid">
            <Card className="contact-form-card">
              <CardHeader>
                <CardTitle className="heading-2">Booking Enquiry</CardTitle>
                <CardDescription>Please provide your details for booking</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label className="body-small">Full Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="body-small">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="body-small">Check-in Date *</label>
                      <Input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="body-small">Check-out Date *</label>
                      <Input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="body-small">Contact Number *</label>
                    <Input
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      placeholder="Your 10-digit mobile number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="body-small">Address *</label>
                    <Textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Your complete address"
                      rows={3}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="body-small">Aadhaar Number *</label>
                    <Input
                      type="text"
                      name="aadhaar"
                      value={formData.aadhaar}
                      onChange={handleInputChange}
                      placeholder="12-digit Aadhaar number"
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary btn-full">
                    Submit Booking Request
                  </button>
                </form>
              </CardContent>
            </Card>

            <div className="contact-info-container">
              <Card className="contact-info-card">
                <CardHeader>
                  <CardTitle className="heading-2">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="contact-info-content">
                  <div className="contact-info-item">
                    <Phone size={20} />
                    <div>
                      <p className="body-small text-muted">Call Us</p>
                      {hotelInfo.phone.map((phone, idx) => (
                        <a key={idx} href={`tel:${phone}`} className="body-medium contact-link">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <Mail size={20} />
                    <div>
                      <p className="body-small text-muted">Email</p>
                      <a href={`mailto:${hotelInfo.email}`} className="body-medium contact-link">
                        {hotelInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <MapPin size={20} />
                    <div>
                      <p className="body-small text-muted">Address</p>
                      <p className="body-medium">{hotelInfo.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="nearby-card">
                <CardHeader>
                  <CardTitle className="heading-3">Nearby Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="nearby-list">
                    {nearbyAttractions.map((place, idx) => (
                      <li key={idx} className="body-small">
                        <MapPin size={14} />
                        <span>{place.name}</span>
                        <span className="nearby-distance">{place.distance}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="heading-3">Hotel Balaji Lodging</h3>
              <p className="body-small">{hotelInfo.tagline}</p>
              <div className="footer-social">
                <a href={hotelInfo.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                  <Instagram size={20} />
                </a>
                <a href={hotelInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="social-link">
                  <MessageCircle size={20} />
                </a>
                <a href={hotelInfo.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4 className="heading-3">Quick Contact</h4>
              <ul className="footer-links">
                <li className="body-small">
                  <Phone size={16} />
                  <span>{hotelInfo.phone[0]}</span>
                </li>
                <li className="body-small">
                  <Mail size={16} />
                  <span>{hotelInfo.email}</span>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="heading-3">Location</h4>
              <p className="body-small">{hotelInfo.address}</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="caption">© 2025 Hotel Balaji Lodging. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HotelLanding;
