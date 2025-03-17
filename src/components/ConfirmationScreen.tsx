
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookingFormValues } from './BookingForm';
import { CheckCircle, Calendar, Clock, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { format } from 'date-fns';
import { issues, brands, deviceTypes } from '@/data/repairData';

interface ConfirmationScreenProps {
  bookingDetails: {
    device: string;
    brand: string;
    issue: string;
    formData: BookingFormValues;
  };
  onNewBooking: () => void;
}

const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({ 
  bookingDetails, 
  onNewBooking 
}) => {
  const { device, brand, issue, formData } = bookingDetails;
  
  // Find the selected device, brand, and issue from the data
  const selectedDevice = deviceTypes.find(d => d.id === device);
  const selectedBrand = brands.find(b => b.id === brand);
  const selectedIssue = issues.find(i => i.id === issue);

  const deviceName = selectedDevice?.name || '';
  const brandName = selectedBrand?.name || '';
  const issueName = selectedIssue?.name || '';
  const issuePrice = selectedIssue?.basePrice || 0;

  return (
    <div className="space-y-8 slide-in">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="h-20 w-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-500" />
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">Booking Confirmed!</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Your repair request has been successfully scheduled. Our technician will be at your location at the specified time.
        </p>
      </div>
      
      <div className="space-y-6 max-w-2xl mx-auto">
        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-medium">Booking Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Device</p>
                <p className="font-medium">{brandName} {deviceName}</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Service</p>
                <p className="font-medium">{issueName}</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Date</p>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <p>{format(formData.date, 'EEEE, MMMM do, yyyy')}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Time</p>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <p>{formData.timeSlot}</p>
                </div>
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <p className="text-sm text-muted-foreground">Address</p>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-1" />
                  <p>{formData.address}, {formData.city}, {formData.state} - {formData.pincode}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Contact</p>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <p>{formData.phone}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Estimated Price</p>
                <p className="font-medium">Starting from ₹{issuePrice.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center space-y-2 p-4 bg-primary/5 rounded-lg">
          <p className="text-sm">
            <span className="font-medium">Need to make changes?</span> Please call our customer service at <span className="font-medium">1800-123-4567</span>
          </p>
        </div>
        
        <div className="pt-4 text-center">
          <Button onClick={onNewBooking}>Book Another Repair</Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationScreen;
