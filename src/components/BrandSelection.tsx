
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { brands } from '@/data/repairData';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BrandSelectionProps {
  selectedDevice: string;
  selectedBrand: string | null;
  onSelectBrand: (brandId: string) => void;
  onBack: () => void;
}

const BrandSelection: React.FC<BrandSelectionProps> = ({ 
  selectedDevice, 
  selectedBrand, 
  onSelectBrand,
  onBack
}) => {
  // Filter brands that are compatible with the selected device type
  const compatibleBrands = brands.filter(brand => 
    brand.deviceTypes.includes(selectedDevice)
  );

  return (
    <div className="space-y-6 slide-in">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Select your brand</h2>
        <p className="text-muted-foreground">
          Choose the brand of your {selectedDevice === 'smartphone' ? 'smartphone' : 'laptop'}
        </p>
      </div>
      
      <div className="mb-6">
        <Button 
          variant="ghost" 
          className="gap-2" 
          onClick={onBack}
        >
          <ArrowLeft className="h-4 w-4" /> Back to device selection
        </Button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {compatibleBrands.map((brand) => (
          <Card 
            key={brand.id}
            className={cn(
              "cursor-pointer transition-all duration-300 hover:shadow-md",
              selectedBrand === brand.id 
                ? "border-primary shadow-sm bg-primary/5" 
                : "border hover:border-primary/50"
            )}
            onClick={() => onSelectBrand(brand.id)}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center h-28">
              <h3 className={cn(
                "text-lg font-medium text-center transition-colors",
                selectedBrand === brand.id 
                  ? "text-primary" 
                  : "text-foreground"
              )}>
                {brand.name}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BrandSelection;
