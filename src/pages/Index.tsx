
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import DeviceSelection from '@/components/DeviceSelection';
import BrandSelection from '@/components/BrandSelection';
import IssueSelection from '@/components/IssueSelection';
import BookingForm, { BookingFormValues } from '@/components/BookingForm';
import ConfirmationScreen from '@/components/ConfirmationScreen';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [step, setStep] = useState<number>(0);
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [bookingData, setBookingData] = useState<BookingFormValues | null>(null);

  const handleStartBooking = () => {
    setStep(1);
  };

  const handleDeviceSelect = (deviceId: string) => {
    setSelectedDevice(deviceId);
    setStep(2);
  };

  const handleBrandSelect = (brandId: string) => {
    setSelectedBrand(brandId);
    setStep(3);
  };

  const handleIssueSelect = (issueId: string) => {
    setSelectedIssue(issueId);
    setStep(4);
  };

  const handleBackToDeviceSelection = () => {
    setStep(1);
  };

  const handleBackToBrandSelection = () => {
    setStep(2);
  };

  const handleBackToIssueSelection = () => {
    setStep(3);
  };

  const handleBookingSubmit = (data: BookingFormValues) => {
    // Here you would typically send the data to your backend
    console.log('Booking submitted:', {
      device: selectedDevice,
      brand: selectedBrand,
      issue: selectedIssue,
      ...data
    });
    
    // Store the form data
    setBookingData(data);
    
    // Show success toast
    toast({
      title: "Booking Successful!",
      description: "Your repair has been scheduled.",
    });
    
    // Move to confirmation screen
    setStep(5);
  };

  const handleNewBooking = () => {
    // Reset all states and go back to the beginning
    setSelectedDevice(null);
    setSelectedBrand(null);
    setSelectedIssue(null);
    setBookingData(null);
    setStep(0);
  };

  return (
    <Layout>
      {step === 0 && (
        <Hero onStartBooking={handleStartBooking} />
      )}
      
      {step === 1 && (
        <DeviceSelection
          selectedDevice={selectedDevice}
          onSelectDevice={handleDeviceSelect}
        />
      )}
      
      {step === 2 && selectedDevice && (
        <BrandSelection
          selectedDevice={selectedDevice}
          selectedBrand={selectedBrand}
          onSelectBrand={handleBrandSelect}
          onBack={handleBackToDeviceSelection}
        />
      )}
      
      {step === 3 && selectedDevice && selectedBrand && (
        <IssueSelection
          selectedDevice={selectedDevice}
          selectedIssue={selectedIssue}
          onSelectIssue={handleIssueSelect}
          onBack={handleBackToBrandSelection}
        />
      )}
      
      {step === 4 && (
        <BookingForm
          onBack={handleBackToIssueSelection}
          onSubmit={handleBookingSubmit}
        />
      )}
      
      {step === 5 && bookingData && selectedDevice && selectedBrand && selectedIssue && (
        <ConfirmationScreen
          bookingDetails={{
            device: selectedDevice,
            brand: selectedBrand,
            issue: selectedIssue,
            formData: bookingData
          }}
          onNewBooking={handleNewBooking}
        />
      )}
    </Layout>
  );
};

export default Index;
