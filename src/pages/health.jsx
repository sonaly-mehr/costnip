import Index from '@/components/HealthSpotlight/Filter/Index';
import HealthTopics from '@/components/HealthSpotlight/HealthTopics';
import MobileViewBlogSlides from '@/components/HealthSpotlight/MobileViewBlogSlides';
import RecentlyPublished from '@/components/HealthSpotlight/RecentlyPublished';
import Sponsored from '@/components/HealthSpotlight/Sponsored';
import Spotlight from '@/components/HealthSpotlight/Spotlight';
import Navbar from '@/components/Navbar';
import React from 'react';

const health = () => {
    return (
        <>
           <Navbar/> 
           <Spotlight/>
           <Index/>
           <RecentlyPublished/>
           <HealthTopics/>
           <MobileViewBlogSlides/>
           <Sponsored/>
        </>
    );
};

export default health;
