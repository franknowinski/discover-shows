source 'https://rubygems.org'

gem 'rails', '4.2.5.1'
gem 'pg'
gem 'puma'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc
gem 'angular-rails-templates'
gem 'rspotify'
gem 'awesome_print', require: 'ap'
gem 'dotenv-rails', :groups => [:development, :test]
gem 'bootstrap-sass', '~> 3.3.6'
gem 'rails-erd'
gem 'active_model_serializers'
gem 'curb'

group :development, :test do
  gem 'pry-byebug'
end

group :development do
  gem 'web-console', '~> 2.0'
  gem 'spring'
end

gem 'rails_12factor', group: :production

group :production, :staging do
  gem 'pg'
  gem "rails_12factor"
  gem "rails_stdout_logging"
  gem "rails_serve_static_assets"
end
