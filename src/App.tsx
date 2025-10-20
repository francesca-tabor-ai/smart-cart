import { useState, useEffect } from 'react';
import { ShoppingCart, Sparkles, ChefHat, ArrowRight, MessageSquare, Zap, Shield, TrendingUp, Users, Clock, Target, Database, Lock, LineChart, Download } from 'lucide-react';

function App() {
  const [isTyping, setIsTyping] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [activeRecipe, setActiveRecipe] = useState(0);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const recipes = [
    { name: 'Quick Dinners', price: '£42.50', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop' },
    { name: 'Family Favourites', price: '£65.30', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop' },
    { name: 'High-Protein', price: '£37.80', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop' },
    { name: 'Vegan Week', price: '£48.90', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop' },
    { name: 'Seasonal Specials', price: '£54.20', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop' },
  ];

  useEffect(() => {
    const typingTimer = setTimeout(() => setIsTyping(false), 2000);
    const buttonTimer = setTimeout(() => setShowButton(true), 2500);
    return () => {
      clearTimeout(typingTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#402A2F]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E7E6E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="flex items-center gap-2 cursor-pointer">
            <ChefHat className="w-5 h-5 sm:w-6 sm:h-6 text-[#402A2F]" />
            <span className="text-lg sm:text-xl font-semibold">SmartCart</span>
          </a>
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="text-sm hover:text-[#402A2F]/70 transition-colors">Home</a>
            <a href="#solution" onClick={(e) => handleNavClick(e, '#solution')} className="text-sm hover:text-[#402A2F]/70 transition-colors">Solution</a>
            <a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')} className="text-sm hover:text-[#402A2F]/70 transition-colors">How it Works</a>
            <a href="#impact" onClick={(e) => handleNavClick(e, '#impact')} className="text-sm hover:text-[#402A2F]/70 transition-colors">Impact</a>
            <a href="#who-its-for" onClick={(e) => handleNavClick(e, '#who-its-for')} className="text-sm hover:text-[#402A2F]/70 transition-colors">Who It's For</a>
            <button className="px-4 lg:px-5 py-2 bg-[#D8D0C1] hover:bg-[#CEC7BF] rounded-full text-sm font-medium transition-colors">Request Pilot</button>
          </div>
          <button className="md:hidden px-4 py-2 bg-[#D8D0C1] hover:bg-[#CEC7BF] rounded-full text-xs font-medium transition-colors">
            Menu
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2306)',
              animation: 'subtle-zoom 20s ease-in-out infinite alternate'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#402A2F]/60 via-[#402A2F]/40 to-[#FAF8F5]/95" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* AI Assistant Bubble */}
          <div className="hidden lg:block absolute top-0 right-8 bg-white rounded-2xl shadow-xl p-4 max-w-xs animate-fade-in">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#D8D0C1] rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 text-[#402A2F]" />
              </div>
              <div className="text-left text-sm">
                {isTyping ? (
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-[#402A2F] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-[#402A2F] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-[#402A2F] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                ) : (
                  <p className="text-[#402A2F]">
                    Sure! Here's a 3-day meal plan — everything's in stock at Ocado.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Discover, Cook, and Shop —<br className="hidden sm:block" />
            All in One Conversation
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            Ask for a recipe. Get real ingredients. Check out in minutes.<br />
            <span className="text-sm sm:text-base md:text-lg">SmartCart connects your favorite AI assistant to grocery platforms like Ocado, turning recipes into ready-to-buy baskets.</span>
          </p>

          {/* AI Recipe Card Overlay */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto mb-8 sm:mb-12 transform hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E7E6E3] rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#402A2F]" />
              </div>
              <input
                type="text"
                placeholder="Plan my weeknight dinners under £60"
                className="flex-1 text-sm sm:text-base md:text-lg border-none outline-none bg-transparent text-[#402A2F] placeholder-[#402A2F]/40"
                readOnly
              />
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div className="aspect-square rounded-lg sm:rounded-xl bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop)' }} />
              <div className="aspect-square rounded-lg sm:rounded-xl bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop)' }} />
              <div className="aspect-square rounded-lg sm:rounded-xl bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop)' }} />
            </div>

            {showButton && (
              <button className="w-full py-3 sm:py-4 bg-[#402A2F] text-white rounded-full font-medium flex items-center justify-center gap-1 sm:gap-2 hover:bg-[#402A2F]/90 transition-all animate-slide-up group text-xs sm:text-sm md:text-base">
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Add all ingredients to cart</span>
                <span className="sm:hidden">Add to cart</span>
                <span className="text-xs sm:text-sm opacity-75">· £57.80</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#402A2F] rounded-full font-semibold text-base sm:text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Try a Recipe
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#D8D0C1] text-[#402A2F] rounded-full font-semibold text-base sm:text-lg hover:bg-[#CEC7BF] transition-all">
              Request a Demo
            </button>
          </div>
        </div>

      </section>

      {/* Recipe Showcase Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#402A2F]">Explore Popular Recipe Collections</h2>
            <p className="text-base sm:text-lg text-[#402A2F]/70">Curated meal plans tailored to your lifestyle and budget</p>
          </div>

          <div className="relative">
            {/* Desktop Grid View */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {recipes.map((recipe, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveRecipe(idx)}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    activeRecipe === idx ? 'ring-2 ring-[#402A2F]' : ''
                  }`}
                >
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${recipe.image})` }} />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-3 text-[#402A2F]">{recipe.name}</h3>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-[#402A2F]/70">{recipe.price} total</span>
                    </div>
                    <button className="w-full py-2.5 bg-[#402A2F] hover:bg-[#402A2F]/90 text-white rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Basket
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile/Tablet Carousel */}
            <div className="md:hidden">
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                {recipes.map((recipe, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveRecipe(idx)}
                    className={`flex-shrink-0 w-64 sm:w-80 bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 snap-start ${
                      activeRecipe === idx ? 'scale-105 ring-2 ring-[#402A2F]' : ''
                    }`}
                  >
                    <div className="h-48 sm:h-56 bg-cover bg-center" style={{ backgroundImage: `url(${recipe.image})` }} />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-3 text-[#402A2F]">{recipe.name}</h3>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-[#402A2F]/70">{recipe.price} total</span>
                      </div>
                      <button className="w-full py-2.5 bg-[#402A2F] hover:bg-[#402A2F]/90 text-white rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Add to Basket
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in">Make Grocery Shopping Conversational</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#402A2F]/80 leading-relaxed">
            Turn ChatGPT, Claude, or any AI assistant into a personal grocery concierge.<br className="hidden sm:block" />
            SmartCart connects your grocery marketplace to the Model Context Protocol (MCP) — making every product, promotion, and basket instantly shoppable through natural language.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-slide-in-left" style={{ opacity: 0, animationFillMode: 'forwards' }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">The Problem</h2>
              <p className="text-base sm:text-lg text-[#402A2F]/80 mb-4 sm:mb-6 leading-relaxed">
                Grocery marketplaces are rich in data but locked behind closed systems.
                Consumers can't build or modify baskets through AI assistants, and platforms lose valuable moments of intent when people plan meals, track diets, or ask for recipes elsewhere.
              </p>
              <p className="text-base sm:text-lg text-[#402A2F]/80 leading-relaxed">
                Affluent, time-pressed shoppers want speed, personalization, and frictionless checkout — not another scrolling session.
              </p>
            </div>
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg animate-slide-in-right" style={{ opacity: 0, animationFillMode: 'forwards' }}>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Closed Systems</h3>
                    <p className="text-sm sm:text-base text-[#402A2F]/70">Data trapped in silos, inaccessible to AI</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 rotate-180" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Lost Intent</h3>
                    <p className="text-sm sm:text-base text-[#402A2F]/70">Shoppers plan elsewhere, conversion drops</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Friction Everywhere</h3>
                    <p className="text-sm sm:text-base text-[#402A2F]/70">Scrolling, searching, adding — one item at a time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solution" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Bring Conversational Commerce to Life</h2>
            <p className="text-base sm:text-lg md:text-xl text-[#402A2F]/80 max-w-4xl mx-auto leading-relaxed">
              SmartCart connects your grocery platform to the world of AI assistants — turning everyday queries like "What should I cook tonight?" into real, ready-to-purchase baskets.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#E7E6E3] to-[#D8D0C1] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center mb-12 sm:mb-16 animate-scale-in" style={{ opacity: 0, animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <p className="text-base sm:text-lg md:text-xl text-[#402A2F] leading-relaxed">
              Whether you're a retailer, a nutrition platform, or a media network, SmartCart gives you the technology layer to make your products instantly <span className="font-semibold">AI-shoppable</span>.
            </p>
          </div>

          {/* Solution Cards */}
          <div className="space-y-8 sm:space-y-12">
            {/* For Grocery Marketplaces */}
            <div className="bg-white border-2 border-[#E7E6E3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D8D0C1] rounded-full flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 text-[#402A2F]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">For Grocery Marketplaces</h3>
                  <p className="text-lg sm:text-xl font-semibold text-[#402A2F]/80 mb-4">Turn Meal Planning into a Transaction</p>
                </div>
              </div>
              <p className="text-base sm:text-lg text-[#402A2F]/80 mb-6 leading-relaxed">
                Your customers already ask ChatGPT, "What can I make for dinner?" SmartCart bridges that gap — connecting your live catalog, pricing, and delivery data directly to AI assistants.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-base sm:text-lg mb-3">What it delivers:</h4>
                <ul className="space-y-2 text-sm sm:text-base text-[#402A2F]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">•</span>
                    <span>Seamless AI-to-cart experiences inside ChatGPT or Alexa.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">•</span>
                    <span>Dynamic baskets built from recipes, nutrition plans, or price goals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">•</span>
                    <span>Real-time stock, substitutions, and promotions surfaced in context.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">•</span>
                    <span>New retail media inventory within AI recommendations.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#FAF8F5] rounded-xl p-4 mb-6">
                <p className="text-sm sm:text-base font-semibold text-[#402A2F]">Result: Shoppers spend less time searching and more time checking out. Your platform becomes the first truly AI-native grocery marketplace.</p>
              </div>
              <button className="px-6 py-3 bg-[#402A2F] text-white rounded-full font-semibold hover:bg-[#402A2F]/90 transition-colors">
                Request a Pilot
              </button>
            </div>

            {/* For Nutrition & Meal Apps */}
            <div className="bg-white border-2 border-[#E7E6E3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D8D0C1] rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-[#402A2F]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">For Nutrition & Meal Apps</h3>
                  <p className="text-lg sm:text-xl font-semibold text-[#402A2F]/80 mb-4">Close the Loop Between Planning and Purchase</p>
                </div>
              </div>
              <p className="text-base sm:text-lg text-[#402A2F]/80 mb-6 leading-relaxed">
                Nutrition and meal-planning apps inspire healthy living — but most stop at the recipe. SmartCart connects those meal plans to grocery marketplaces, so users can buy all ingredients in one click.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-base sm:text-lg mb-3">What it delivers:</h4>
                <ul className="space-y-2 text-sm sm:text-base text-[#402A2F]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">•</span>
                    <span>Programmatic basket creation via MCP endpoints.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">•</span>
                    <span>Personalized substitutions for diet, allergies, or budget.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">•</span>
                    <span>Cross-marketplace flexibility (Ocado, Instacart, Tesco, etc.).</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#FAF8F5] rounded-xl p-4 mb-6">
                <p className="text-sm sm:text-base font-semibold text-[#402A2F]">Result: You transform engagement into revenue — becoming the go-to destination for actionable meal planning.</p>
              </div>
              <button className="px-6 py-3 bg-[#402A2F] text-white rounded-full font-semibold hover:bg-[#402A2F]/90 transition-colors">
                Integrate SmartCart
              </button>
            </div>

            {/* For Retail Media Networks */}
            <div className="bg-white border-2 border-[#E7E6E3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D8D0C1] rounded-full flex items-center justify-center flex-shrink-0">
                  <LineChart className="w-6 h-6 sm:w-7 sm:h-7 text-[#402A2F]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">For Retail Media Networks</h3>
                  <p className="text-lg sm:text-xl font-semibold text-[#402A2F]/80 mb-4">Create AI-Native Advertising Inside Conversational Journeys</p>
                </div>
              </div>
              <p className="text-base sm:text-lg text-[#402A2F]/80 mb-6 leading-relaxed">
                The next ad platform isn't a banner — it's an answer. SmartCart enables retailers and FMCG brands to promote products contextually within AI-generated shopping experiences.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-base sm:text-lg mb-3">What it delivers:</h4>
                <ul className="space-y-2 text-sm sm:text-base text-[#402A2F]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">•</span>
                    <span>Sponsored product placement in AI-generated baskets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">•</span>
                    <span>Performance tracking for generative ad impressions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">•</span>
                    <span>First-party data enrichment and closed-loop attribution.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#FAF8F5] rounded-xl p-4 mb-6">
                <p className="text-sm sm:text-base font-semibold text-[#402A2F]">Result: Retailers unlock new media revenue streams while maintaining full data ownership and governance.</p>
              </div>
              <button className="px-6 py-3 bg-[#402A2F] text-white rounded-full font-semibold hover:bg-[#402A2F]/90 transition-colors">
                Explore Retail Media Integration
              </button>
            </div>

            {/* For Smart Home Platforms */}
            <div className="bg-white border-2 border-[#E7E6E3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D8D0C1] rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-[#402A2F]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">For Smart Home Platforms</h3>
                  <p className="text-lg sm:text-xl font-semibold text-[#402A2F]/80 mb-4">From Voice to Basket in Seconds</p>
                </div>
              </div>
              <p className="text-base sm:text-lg text-[#402A2F]/80 mb-6 leading-relaxed">
                When users say, "Add oat milk to my shopping list," SmartCart turns that intent into a real basket item at a live retailer.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-base sm:text-lg mb-3">What it delivers:</h4>
                <ul className="space-y-2 text-sm sm:text-base text-[#402A2F]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">•</span>
                    <span>Secure, tokenized integration with grocery APIs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">•</span>
                    <span>Live pricing and availability through the MCP layer.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">•</span>
                    <span>Frictionless checkout and delivery scheduling.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#FAF8F5] rounded-xl p-4 mb-6">
                <p className="text-sm sm:text-base font-semibold text-[#402A2F]">Result: Your smart home device becomes a true household shopping companion — not just a reminder list.</p>
              </div>
              <button className="px-6 py-3 bg-[#402A2F] text-white rounded-full font-semibold hover:bg-[#402A2F]/90 transition-colors">
                Partner with Us
              </button>
            </div>
          </div>

          {/* Why SmartCart Summary */}
          <div className="mt-12 sm:mt-16 bg-gradient-to-br from-[#402A2F] to-[#402A2F]/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Why SmartCart</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Faster Paths to Checkout</h4>
                  <p className="text-sm text-white/80">AI builds baskets, users confirm in seconds.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Personalization at Scale</h4>
                  <p className="text-sm text-white/80">Combine AI reasoning with real-time retail data.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Governance First</h4>
                  <p className="text-sm text-white/80">GDPR-compliant, tokenized, and secure by design.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Measurable ROI</h4>
                  <p className="text-sm text-white/80">Higher conversions, larger baskets, deeper engagement.</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="px-8 py-4 bg-white text-[#402A2F] rounded-full font-semibold text-lg hover:bg-white/90 transition-all shadow-lg">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">From Prompt to Purchase — in Seconds</h2>
            <p className="text-base sm:text-lg md:text-xl text-[#402A2F]/80 max-w-4xl mx-auto leading-relaxed">
              SmartCart transforms everyday meal planning into instant shopping. It connects grocery marketplaces to large language models (like ChatGPT or Claude) through a secure Model Context Protocol (MCP) layer — allowing AI assistants to search, curate, and build baskets on behalf of users.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8 sm:space-y-12 mb-12 sm:mb-16">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#402A2F] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">The User Makes a Request</h3>
                  <p className="text-base sm:text-lg text-[#402A2F]/80 mb-4">It starts with a natural question:</p>
                </div>
              </div>
              <div className="bg-[#FAF8F5] rounded-xl p-4 sm:p-6 mb-4 space-y-2">
                <p className="text-sm sm:text-base text-[#402A2F] italic">"Plan a week of family dinners under £80."</p>
                <p className="text-sm sm:text-base text-[#402A2F] italic">"Add my regular breakfast items to the basket."</p>
                <p className="text-sm sm:text-base text-[#402A2F] italic">"Find vegan protein options available this week."</p>
              </div>
              <p className="text-base sm:text-lg text-[#402A2F]/80">
                The AI interprets the request — but instead of guessing what's in stock, it connects directly to your live catalog via SmartCart.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#402A2F] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">SmartCart Connects to the Marketplace</h3>
                  <p className="text-base sm:text-lg text-[#402A2F]/80 mb-4">
                    SmartCart acts as the secure bridge between large language models and grocery platforms. Through the Model Context Protocol, it provides the AI with structured, context-rich access to:
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div className="bg-[#FAF8F5] rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#D8D0C1] rounded-full flex items-center justify-center mb-3">
                    <Database className="w-5 h-5 text-[#402A2F]" />
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base mb-2">Product Data</h4>
                  <p className="text-xs sm:text-sm text-[#402A2F]/70">Titles, pricing, nutritional info, and availability.</p>
                </div>
                <div className="bg-[#FAF8F5] rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#D8D0C1] rounded-full flex items-center justify-center mb-3">
                    <TrendingUp className="w-5 h-5 text-[#402A2F]" />
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base mb-2">Promotions</h4>
                  <p className="text-xs sm:text-sm text-[#402A2F]/70">Live discounts, bundles, and substitutions.</p>
                </div>
                <div className="bg-[#FAF8F5] rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#D8D0C1] rounded-full flex items-center justify-center mb-3">
                    <ShoppingCart className="w-5 h-5 text-[#402A2F]" />
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base mb-2">Basket Actions</h4>
                  <p className="text-xs sm:text-sm text-[#402A2F]/70">Add, remove, modify, or share items in real time.</p>
                </div>
              </div>
              <p className="text-base sm:text-lg text-[#402A2F]/80">
                The AI retrieves exactly what's available — <span className="font-semibold">no hallucinations, no expired products.</span>
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#402A2F] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">The Basket is Built in Real Time</h3>
                  <p className="text-base sm:text-lg text-[#402A2F]/80 mb-4">
                    The assistant compiles a curated, shoppable basket that matches the request — optimizing for dietary goals, price, and freshness.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#E7E6E3] to-[#D8D0C1] rounded-xl p-6 mb-4">
                <p className="text-base sm:text-lg font-semibold text-[#402A2F] mb-2">"Here's your £78.60 weekly vegetarian basket. Add to Ocado?"</p>
                <p className="text-sm sm:text-base text-[#402A2F]/70">With one click, the basket is created directly on the retailer's site via secure authentication.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#402A2F] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">Checkout and Delivery</h3>
                  <p className="text-base sm:text-lg text-[#402A2F]/80 mb-4">
                    When the user confirms, SmartCart initiates checkout through OAuth-protected endpoints. Users can choose delivery slots, apply loyalty discounts, or modify quantities — all within the retailer's native flow.
                  </p>
                </div>
              </div>
              <div className="bg-[#FAF8F5] rounded-xl p-4 sm:p-6">
                <p className="text-base sm:text-lg font-semibold text-[#402A2F] text-center">No new accounts, no redirects, no friction.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#402A2F] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">Insights and Optimization</h3>
                  <p className="text-base sm:text-lg text-[#402A2F]/80 mb-4">
                    For retailers and partners, SmartCart provides analytics on:
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-4 bg-[#FAF8F5] rounded-xl">
                  <LineChart className="w-5 h-5 text-[#402A2F] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm sm:text-base font-semibold mb-1">Basket Conversions</p>
                    <p className="text-xs sm:text-sm text-[#402A2F]/70">From AI sources</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-[#FAF8F5] rounded-xl">
                  <TrendingUp className="w-5 h-5 text-[#402A2F] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm sm:text-base font-semibold mb-1">Performance</p>
                    <p className="text-xs sm:text-sm text-[#402A2F]/70">Product and promotion tracking</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-[#FAF8F5] rounded-xl">
                  <Target className="w-5 h-5 text-[#402A2F] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm sm:text-base font-semibold mb-1">User Intent</p>
                    <p className="text-xs sm:text-sm text-[#402A2F]/70">What customers ask for via AI</p>
                  </div>
                </div>
              </div>
              <p className="text-base sm:text-lg text-[#402A2F]/80 mt-4">
                This data feeds back into your retail media network, optimizing future product placements and offers.
              </p>
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-gradient-to-br from-[#402A2F] to-[#402A2F]/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-white mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Secure. Compliant. Scalable.</h3>
            <p className="text-base sm:text-lg text-center mb-8 text-white/90">
              SmartCart is designed for enterprise-grade governance and scalability.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Secure Tokens</h4>
                <p className="text-sm text-white/80">Short-lived, encrypted tokens for all operations</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">GDPR Compliant</h4>
                <p className="text-sm text-white/80">User data never leaves retailer's environment</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Database className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">API-First Design</h4>
                <p className="text-sm text-white/80">Compatible with existing catalog and checkout APIs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Scalable Infrastructure</h4>
                <p className="text-sm text-white/80">Millions of AI-driven queries per day</p>
              </div>
            </div>
          </div>

          {/* Benefits Table */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Why It Works for Everyone</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 bg-[#D8D0C1] rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#402A2F]" />
                </div>
                <h4 className="font-semibold text-lg mb-4">For Consumers</h4>
                <ul className="space-y-2 text-sm text-[#402A2F]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">✓</span>
                    <span>Faster, simpler grocery shopping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">✓</span>
                    <span>Personalized recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">✓</span>
                    <span>Seamless cross-device experience</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#D8D0C1] rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-[#402A2F]" />
                </div>
                <h4 className="font-semibold text-lg mb-4">For Retailers</h4>
                <ul className="space-y-2 text-sm text-[#402A2F]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">✓</span>
                    <span>Higher conversions and larger baskets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">✓</span>
                    <span>Differentiation beyond delivery speed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">✓</span>
                    <span>Better data on shopping intent</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#D8D0C1] rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#402A2F]" />
                </div>
                <h4 className="font-semibold text-lg mb-4">For Partners</h4>
                <ul className="space-y-2 text-sm text-[#402A2F]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">✓</span>
                    <span>New monetization and API integration opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">✓</span>
                    <span>Access to AI-native audiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#402A2F] mt-1">✓</span>
                    <span>Scalable integration via MCP</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Example Flow */}
          <div className="bg-gradient-to-br from-[#E7E6E3] to-[#D8D0C1] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Example Flow</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#402A2F] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">1</div>
                <p className="text-base sm:text-lg text-[#402A2F]"><span className="font-semibold">You say:</span> "Plan five quick dinners for two under £60."</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#402A2F] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">2</div>
                <p className="text-base sm:text-lg text-[#402A2F]"><span className="font-semibold">AI builds:</span> Pasta with lentils, tofu stir-fry, chickpea curry, stuffed peppers, vegetable soup.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#402A2F] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">3</div>
                <p className="text-base sm:text-lg text-[#402A2F]"><span className="font-semibold">SmartCart:</span> Finds ingredients, substitutes, and promotions → generates a ready-to-checkout Ocado basket.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#402A2F] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">4</div>
                <p className="text-base sm:text-lg text-[#402A2F]"><span className="font-semibold">You click:</span> "Add to Cart" — done.</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">SmartCart in Action</h3>
            <p className="text-base sm:text-lg text-[#402A2F]/80 mb-6 max-w-3xl mx-auto">
              Your platform becomes part of the daily rhythm — powering recipe recommendations, voice shopping, and nutritional planning across every AI interface.
            </p>
            <p className="text-lg sm:text-xl font-semibold mb-6">From ChatGPT to checkout — all powered by SmartCart.</p>
            <button className="px-8 py-4 bg-[#402A2F] text-white rounded-full font-semibold text-lg hover:bg-[#402A2F]/90 transition-all shadow-lg">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 animate-fade-in">Key Capabilities</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#FAF8F5] rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D8D0C1] rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Database className="w-6 h-6 sm:w-7 sm:h-7 text-[#402A2F]" />
              </div>
              <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">Live Catalog Access</h3>
              <p className="text-sm sm:text-base text-[#402A2F]/70">Query real SKUs, prices, and promotions in real-time.</p>
            </div>
            <div className="bg-[#FAF8F5] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#D8D0C1] rounded-full flex items-center justify-center mb-6">
                <ShoppingCart className="w-7 h-7 text-[#402A2F]" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Programmatic Basket Creation</h3>
              <p className="text-[#402A2F]/70">Add, remove, and share baskets securely through AI.</p>
            </div>
            <div className="bg-[#FAF8F5] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#D8D0C1] rounded-full flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#402A2F]" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Personalization</h3>
              <p className="text-[#402A2F]/70">Tailor baskets using nutrition tags, preferences, and history.</p>
            </div>
            <div className="bg-[#FAF8F5] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#D8D0C1] rounded-full flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-[#402A2F]" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Checkout Integration</h3>
              <p className="text-[#402A2F]/70">Reserve slots and authenticate payments via OAuth.</p>
            </div>
            <div className="bg-[#FAF8F5] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#D8D0C1] rounded-full flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#402A2F]" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Governance Built-In</h3>
              <p className="text-[#402A2F]/70">GDPR-ready, tokenized, and auditable from day one.</p>
            </div>
            <div className="bg-[#FAF8F5] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#D8D0C1] rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7 text-[#402A2F]" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Natural Language</h3>
              <p className="text-[#402A2F]/70">Shop exactly as you think — no forms, no scrolling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section id="who-its-for" className="py-12 sm:py-16 md:py-20 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 animate-fade-in">Who It's For</h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E7E6E3] rounded-full flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-[#402A2F]" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg md:text-xl">Online Grocery Marketplaces</h3>
              </div>
              <p className="text-sm sm:text-base text-[#402A2F]/70 mb-2 sm:mb-3">Ocado, Tesco, Instacart</p>
              <p className="text-sm sm:text-base text-[#402A2F]/80">Differentiate beyond delivery speed by owning the AI shopping interface.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#E7E6E3] rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#402A2F]" />
                </div>
                <h3 className="font-semibold text-xl">Nutrition & Meal Apps</h3>
              </div>
              <p className="text-[#402A2F]/70 mb-3">Lifesum, MyFitnessPal</p>
              <p className="text-[#402A2F]/80">Close the loop from diet tracking to grocery purchase.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#E7E6E3] rounded-full flex items-center justify-center">
                  <LineChart className="w-6 h-6 text-[#402A2F]" />
                </div>
                <h3 className="font-semibold text-xl">Retail Media Networks</h3>
              </div>
              <p className="text-[#402A2F]/70 mb-3">Advertising Platforms</p>
              <p className="text-[#402A2F]/80">Open a new layer of AI-native ad inventory inside conversational experiences.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#E7E6E3] rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-[#402A2F]" />
                </div>
                <h3 className="font-semibold text-xl">Smart Home Platforms</h3>
              </div>
              <p className="text-[#402A2F]/70 mb-3">Alexa, Google Home</p>
              <p className="text-[#402A2F]/80">Power "add to basket" voice commands with real-time grocery data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">From Search to Sale — Redefined</h2>
            <p className="text-base sm:text-lg md:text-xl text-[#402A2F]/80 max-w-4xl mx-auto leading-relaxed">
              SmartCart isn't just a technical layer. It's a growth engine that turns everyday conversations into conversions — bringing measurable results for retailers, partners, and shoppers.
            </p>
          </div>

          {/* Impact Cards */}
          <div className="space-y-8 sm:space-y-12">
            {/* For Grocery Marketplaces */}
            <div className="bg-gradient-to-br from-[#FAF8F5] to-white border-2 border-[#E7E6E3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#402A2F] rounded-full flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">For Grocery Marketplaces</h3>
                  <p className="text-lg sm:text-xl font-semibold text-[#402A2F]/80">Increase Conversion, Basket Value, and Retention</p>
                </div>
              </div>
              <p className="text-base sm:text-lg text-[#402A2F]/80 mb-6">
                When shopping moves inside AI, SmartCart ensures your platform stays at the center of the experience.
              </p>
              <div className="bg-white rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-base sm:text-lg mb-4">What retailers see:</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-[#402A2F] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#402A2F] mb-1">+20–25% lift</p>
                      <p className="text-sm text-[#402A2F]/70">in conversion rates from pre-curated AI baskets</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-[#402A2F] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#402A2F] mb-1">+15% average order value</p>
                      <p className="text-sm text-[#402A2F]/70">increase from contextual upsells</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-[#402A2F] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#402A2F] mb-1">30% faster checkout</p>
                      <p className="text-sm text-[#402A2F]/70">times, driving repeat weekly orders</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-[#402A2F] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#402A2F] mb-1">Lower abandonment</p>
                      <p className="text-sm text-[#402A2F]/70">shoppers arrive at checkout already decided</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#402A2F] rounded-xl p-4 text-white">
                <p className="text-sm sm:text-base font-semibold">Outcome: Fewer clicks, more purchases, and a differentiated brand experience that no traditional grocery flow can match.</p>
              </div>
            </div>

            {/* For Nutrition & Meal Apps */}
            <div className="bg-gradient-to-br from-[#FAF8F5] to-white border-2 border-[#E7E6E3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#402A2F] rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">For Nutrition & Meal Apps</h3>
                  <p className="text-lg sm:text-xl font-semibold text-[#402A2F]/80">Turn Engagement into Transactions</p>
                </div>
              </div>
              <p className="text-base sm:text-lg text-[#402A2F]/80 mb-6">
                SmartCart closes the loop between inspiration and action.
              </p>
              <div className="bg-white rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-base sm:text-lg mb-4">Impact Highlights:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-[#402A2F] mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-[#402A2F]/80"><span className="font-semibold">1-click grocery fulfillment</span> for every meal plan or recipe.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#402A2F] mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-[#402A2F]/80"><span className="font-semibold">25% longer session times</span> when users can buy instantly.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-[#402A2F] mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-[#402A2F]/80"><span className="font-semibold">2–3x higher subscription retention</span> for "shop-enabled" meal plans.</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#402A2F] rounded-xl p-4 text-white">
                <p className="text-sm sm:text-base font-semibold">Outcome: Apps evolve from passive guides to active grocery partners — increasing both user value and monetization potential.</p>
              </div>
            </div>

            {/* For Retail Media Networks */}
            <div className="bg-gradient-to-br from-[#FAF8F5] to-white border-2 border-[#E7E6E3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#402A2F] rounded-full flex items-center justify-center flex-shrink-0">
                  <LineChart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">For Retail Media Networks</h3>
                  <p className="text-lg sm:text-xl font-semibold text-[#402A2F]/80">Create New AI-Native Advertising Revenue</p>
                </div>
              </div>
              <p className="text-base sm:text-lg text-[#402A2F]/80 mb-6">
                SmartCart introduces a new medium: contextual product placement inside AI recommendations.
              </p>
              <div className="bg-white rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-base sm:text-lg mb-4">Monetization Potential:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-[#402A2F] mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-[#402A2F]/80"><span className="font-semibold">Sponsored products</span> embedded within ChatGPT or voice-assistant results.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-[#402A2F] mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-[#402A2F]/80"><span className="font-semibold">Brand visibility</span> at the moment of purchase intent.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <LineChart className="w-5 h-5 text-[#402A2F] mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-[#402A2F]/80"><span className="font-semibold">Closed-loop attribution</span> — from AI query to basket checkout.</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#402A2F] rounded-xl p-4 text-white">
                <p className="text-sm sm:text-base font-semibold">Outcome: Retail media networks gain a scalable, measurable channel in the emerging world of conversational commerce.</p>
              </div>
            </div>

            {/* For Shoppers */}
            <div className="bg-gradient-to-br from-[#FAF8F5] to-white border-2 border-[#E7E6E3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#402A2F] rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">For Shoppers</h3>
                  <p className="text-lg sm:text-xl font-semibold text-[#402A2F]/80">Personalized. Instant. Effortless.</p>
                </div>
              </div>
              <p className="text-base sm:text-lg text-[#402A2F]/80 mb-6">
                Consumers save time and enjoy smarter choices.
              </p>
              <div className="bg-white rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-base sm:text-lg mb-4">Experience Gains:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#402A2F] mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-[#402A2F]/80"><span className="font-semibold">Save 20–30 minutes</span> per weekly shop.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-[#402A2F] mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-[#402A2F]/80"><span className="font-semibold">Receive personalized, dietary-aware</span> recommendations.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#402A2F] mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-[#402A2F]/80"><span className="font-semibold">Discover seasonal or value-based</span> alternatives automatically.</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#402A2F] rounded-xl p-4 text-white">
                <p className="text-sm sm:text-base font-semibold">Outcome: Convenience meets confidence — shoppers trust that their AI knows what's fresh, affordable, and in stock.</p>
              </div>
            </div>
          </div>

          {/* Enterprise Impact */}
          <div className="mt-12 sm:mt-16 bg-gradient-to-br from-[#402A2F] to-[#402A2F]/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Enterprise-Level Impact</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Time to Market</h4>
                <p className="text-sm text-white/80">Pilot integration in 8–12 weeks using existing APIs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Return on Investment</h4>
                <p className="text-sm text-white/80">Positive ROI within one quarter of launch</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Scalability</h4>
                <p className="text-sm text-white/80">Supports millions of AI-generated baskets per day</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Governance</h4>
                <p className="text-sm text-white/80">100% compliant with GDPR, CCPA, and retail data standards</p>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-12 sm:mt-16 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Transform Your Platform's Trajectory</h3>
            <p className="text-base sm:text-lg text-[#402A2F]/80 mb-6 max-w-3xl mx-auto">
              SmartCart empowers retailers and partners to participate in the next wave of commerce — AI-native shopping. The impact is tangible: higher revenue, stronger loyalty, and leadership in a fast-evolving market.
            </p>
            <button className="px-8 py-4 bg-[#402A2F] text-white rounded-full font-semibold text-lg hover:bg-[#402A2F]/90 transition-all shadow-lg">
              Request a Demo
            </button>
            <p className="text-sm text-[#402A2F]/60 mt-4">→ See how SmartCart can turn your data into daily conversions.</p>
          </div>
        </div>
      </section>

      {/* Get Involved / CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 animate-fade-in">Get Involved</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#402A2F]/80 mb-8 sm:mb-12">
            Be among the first to pilot AI-powered grocery shopping.<br className="hidden sm:block" />
            Let's connect your catalog to the Model Context Protocol and build the first Shoppable Basket via ChatGPT demo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#402A2F] text-white rounded-full font-semibold text-base sm:text-lg hover:bg-[#402A2F]/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              Request a Pilot
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#402A2F] rounded-full font-semibold text-base sm:text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Download Technical Brief
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E7E6E3] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="flex items-center gap-2 cursor-pointer">
              <ChefHat className="w-5 h-5 sm:w-6 sm:h-6 text-[#402A2F]" />
              <span className="text-lg sm:text-xl font-semibold">SmartCart</span>
            </a>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-[#402A2F]/70">
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="hover:text-[#402A2F] transition-colors">Home</a>
              <a href="#solution" onClick={(e) => handleNavClick(e, '#solution')} className="hover:text-[#402A2F] transition-colors">Solution</a>
              <a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')} className="hover:text-[#402A2F] transition-colors">How it Works</a>
              <a href="#impact" onClick={(e) => handleNavClick(e, '#impact')} className="hover:text-[#402A2F] transition-colors">Impact</a>
              <a href="#who-its-for" onClick={(e) => handleNavClick(e, '#who-its-for')} className="hover:text-[#402A2F] transition-colors">Who It's For</a>
            </div>
            <div className="text-xs sm:text-sm text-[#402A2F]/60">
              © 2025 SmartCart. AI-powered grocery shopping.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
