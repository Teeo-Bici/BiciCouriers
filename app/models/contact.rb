class Contact < MailForm::Base
  attribute :name,      :validate => true
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :phone,     :validate => /((\+)33|0)[1-9](\d{2}){4}/
  attribute :message
  attribute :nickname,  :captcha  => true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "Contact depuis le site !",
      :to => "florent.guilbaud@gmail.com",
      :from => %("#{name}" <#{email}>)
    }
  end
end
