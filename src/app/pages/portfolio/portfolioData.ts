export interface PortfolioItem {
    companyName: string;
    quarter: string;
    year: number;
    imageSource: string;
    pressHighlights: PressHighlight[];
  }
  export interface PressHighlight {
    text: string;
    link: string;
  }
  export interface Hash<T> {
    [index: string]: T;
  }
  export interface PortfolioCategory {
    name: string;
    items: PortfolioItem[];
  }
  export const portfolioData: PortfolioCategory[] = [
    {
      name: 'Next Generation Networks',
      items: [
        {
          companyName: 'Working Group Two',
          quarter: '3Q',
          year: 2017,
          imageSource: 'assets/images/working.svg',
          pressHighlights: [
            {
              text: 'Norway\'s Telenor Seeks Salvation in the Cloud with spinout WG2',
              link: 'https://mobile.reuters.com/article/amp/idUSKCN1GD5JA'
            },
            {
              text: 'SDxCentral ',
              link: 'https://www.sdxcentral.com/articles/news/cisco-telenor-launch-mobile-focused-neutral-cloud-platform/2017/10/'
            },
            {
              text: 'Cloud-Managed Mobile Network with Cisco Ultra Packet Core on Amazon Web Services',
              link: 'https://www.prnewswire.com/news-releases/working-group-two-introduces-cloud-managed-mobile-network-with-cisco-ultra-packet-core-on-amazon-web-services-300800823.html'
            },
          ]
        },
        {
          companyName: 'Google Station WiFi',
          quarter: '1Q',
          year: 2018,
          imageSource: 'assets/images/google2.jpg',
          pressHighlights: [
            {
              text: 'Google Station announcement at Mobile World Congress Barcelona',
              link: 'https://newsroom.cisco.com/press-release-content?type=webcontent&articleId=1968644'
            },
          ]
        },
        {
          companyName: 'PacketFabric',
          quarter: '3Q',
          year: 2019,
          imageSource: 'assets/images/packet.svg',
          pressHighlights: [
            {
              text: 'PacketFabric Secures $75M Joint Venture Funding With Digital Alpha Advisors',
              link: 'https://www.businesswire.com/news/home/20190827005512/en/PacketFabric-Secures-75M-Joint-Venture-Funding-Digital'
            },
          ]
        }
      ]
  
    },
    {
      name: 'Cloud',
      items: [
        {
          companyName: 'Cloudian',
          quarter: 'Q1',
          imageSource: 'assets/images/cloudian2.png',
          year: 2018,
          pressHighlights: [
            {
              text: 'Secures $125m Joint Venture Commitment with Digital Alpha',
              link: 'https://globenewswire.com/news-release/2018/02/28/1401078/0/en/Cloudian-Secures-Funding-Commitment-of-125-Million-in-Joint-Venture-with-Digital-Alpha-to-Power-Enterprise-Object-Storage-Growth.html'
            },
            {
              text: 'Cisco & Cloudian Collaborate to Create Scale-Out Enterprise Object Storage Solutions',
              link: 'https://cloudian.com/blog/cisco-and-cloudian-scale-out-enterprise-object-storage-solutions/'
            },
            {
              text: 'Cloudian Taking Customers From NetApp In $24B Market (Forbes)',
              link: 'https://www.forbes.com/sites/petercohan/2018/05/02/cloudian-taking-customers-from-netapp-in-24b-market/#3e4c6a5364ad'
            },
            {
              text: 'Most Widely Deployed Independent Object Storage Provider',
              link: 'https://cloudian.com/press/cloudian-closes-fiscal-year-as-most-widely-deployed-independent-object-storage-provider/'
            },
            {
              text: 'Cloudian & Seagate Collaborate for Joint Solution',
              link: 'https://cloudian.com/press/cloudian-and-seagate-join-forces-to-deliver-ultra-dense-exabyte-scale-private-cloud-storage/'
            },
          ]
        },
  
        {
          companyName: 'UKCloud',
          quarter: 'Q1',
          imageSource: 'src/assets/images/ukcloud.png',
          year: 2019,
          pressHighlights: [
            {
              text: 'UKCloud secures £25m from Cisco investment partner',
              link: 'https://tech.newstatesman.com/cloud/ukcloud-investment',
            },
            {
              text: 'Letter from CEO - Simon Hansford',
              link: 'https://ukcloudx.com/digital-alpha/',
            },
            {
              text: 'Secures $125m Joint Venture Commitment with Digital Alpha',
              link: 'https://www.socpub.com/articles/ukcloud-awarded-expanded-presence-g-cloud-11-new-and-improved-multi-cloud-services-16584',
            }
          ]
        },
        {
          companyName: 'JetStream',
          quarter: 'Q2',
          imageSource: 'assets/images/jet.png',
          year: 2019,
          pressHighlights: [
            {
              text: 'JetStream Software Secures Funding Led by Digital Alpha to Advance Disaster Recovery as a Service, Cloud Data Protection',
              link: 'https://www.jetstreamsoft.com/2019/05/28/jetstream-software-secures-series-a-funding-led-by-digital-alpha-to-advance-draas-and-cloud-data-protection/',
            }
          ]
        }
      ]
    }
  ]