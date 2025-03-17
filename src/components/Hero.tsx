
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, MapPin, Shield, Star } from 'lucide-react';

interface HeroProps {
  onStartBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartBooking }) => {
  return (
    <div className="flex flex-col gap-8 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Expert Device Repairs <br />
            <span className="gradient-text">At Your Doorstep</span>
          </h1>
          <p className="text-lg text-muted-foreground md:max-w-[500px]">
            Fast, reliable repairs for your smartphones and laptops with doorstep service across India. No more waiting in lines!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <Button size="lg" onClick={onStartBooking} className="gap-2">
              Book a Repair <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Services
            </Button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] animate-float">
            <div className="absolute inset-0 rounded-full bg-secondary/20 animate-pulse-slow"></div>
            <div className="absolute top-[20%] left-[15%] h-[250px] w-[180px] md:h-[300px] md:w-[200px] rounded-[2rem] bg-gradient-to-br from-primary to-secondary shadow-lg">
              <div className="absolute inset-[3px] rounded-[calc(2rem-3px)] bg-white dark:bg-gray-900"></div>
            </div>
            <div className="absolute bottom-[20%] right-[15%] h-[200px] w-[280px] md:h-[200px] md:w-[300px] rounded-[1rem] bg-gradient-to-tr from-secondary to-accent shadow-lg transform rotate-12">
              <div className="absolute inset-[3px] rounded-[calc(1rem-3px)] bg-white dark:bg-gray-900"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-card rounded-lg shadow-sm p-6 border">
          <div className="flex gap-3 items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Quick Service</h3>
          </div>
          <p className="text-muted-foreground">Same-day or next-day service for most repairs. We value your time.</p>
        </div>
        <div className="bg-card rounded-lg shadow-sm p-6 border">
          <div className="flex gap-3 items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Quality Guarantee</h3>
          </div>
          <p className="text-muted-foreground">All repairs come with a 6-month warranty. Genuine parts guaranteed.</p>
        </div>
        <div className="bg-card rounded-lg shadow-sm p-6 border">
          <div className="flex gap-3 items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Doorstep Repairs</h3>
          </div>
          <p className="text-muted-foreground">No need to visit a service center. Our experts come to your location.</p>
        </div>
      </div>
      
      <div className="flex items-center justify-center mt-4 gap-1">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <span className="ml-2 text-sm font-medium">4.9/5 from 2,500+ reviews</span>
      </div>
    </div>
  );
};

export default Hero;
