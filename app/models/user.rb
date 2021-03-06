class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :image_url, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :username, length: { maximum: 15 }
  after_initialize :ensure_session_token

  has_many :checkins
  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
    nil
  end

  def total_checkins
    self.checkins.count
  end

  def unique_checkins
    self.checkins.select('DISTINCT drink_id').count
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
