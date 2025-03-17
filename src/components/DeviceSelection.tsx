
import React from 'react';
import { deviceTypes } from '@/data/repairData';
import { Card, CardContent } from '@/components/ui/card';
import { Laptop, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DeviceSelectionProps {
  selectedDevice: string | null;
  onSelectDevice: (deviceId: string) => void;
}

const DeviceSelection: React.FC<DeviceSelectionProps> = ({ selectedDevice, onSelectDevice }) => {
  return (
    <div className="space-y-6 slide-in">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">What device needs repair?</h2>
        <p className="text-muted-foreground">Select the type of device you need help with</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {deviceTypes.map((device) => (
          <Card 
            key={device.id}
            className={cn(
              "cursor-pointer transition-all duration-300 hover:shadow-md transform hover:-translate-y-1",
              selectedDevice === device.id 
                ? "border-primary shadow-sm bg-primary/5" 
                : "border hover:border-primary/50"
            )}
            onClick={() => onSelectDevice(device.id)}
          >
            <CardContent className="p-6 flex flex-col items-center gap-4">
              <div className={cn(
                "h-20 w-20 rounded-full flex items-center justify-center transition-colors",
                selectedDevice === device.id 
                  ? "bg-primary/20" 
                  : "bg-secondary/10"
              )}>
                {device.icon === 'smartphone' ? (
                  <Smartphone className={cn(
                    "h-10 w-10 transition-colors",
                    selectedDevice === device.id 
                      ? "text-primary" 
                      : "text-secondary"
                  )} />
                ) : (
                  <Laptop className={cn(
                    "h-10 w-10 transition-colors",
                    selectedDevice === device.id 
                      ? "text-primary" 
                      : "text-secondary"
                  )} />
                )}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">{device.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {device.icon === 'smartphone' 
                    ? 'Phones, tablets, and other portable devices' 
                    : 'Laptops, notebooks, and ultrabooks'}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DeviceSelection;
