import { cn } from '@/lib/utils';
import './styles.css';

export function DotLoader({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className={cn('fill-current', className)} {...props}>
      <title> </title>
      <circle cx='4' cy='12' r='0'>
        <animate begin='0;spinner_z0Or.end' attributeName='r' calcMode='spline' dur='0.5s' keySplines='.36,.6,.31,1' values='0;3' fill='freeze' />
        <animate begin='spinner_OLMs.end' attributeName='cx' calcMode='spline' dur='0.5s' keySplines='.36,.6,.31,1' values='4;12' fill='freeze' />
        <animate begin='spinner_UHR2.end' attributeName='cx' calcMode='spline' dur='0.5s' keySplines='.36,.6,.31,1' values='12;20' fill='freeze' />
        <animate
          id='spinner_lo66'
          begin='spinner_Aguh.end'
          attributeName='r'
          calcMode='spline'
          dur='0.5s'
          keySplines='.36,.6,.31,1'
          values='3;0'
          fill='freeze'
        />
        <animate id='spinner_z0Or' begin='spinner_lo66.end' attributeName='cx' dur='0.001s' values='20;4' fill='freeze' />
      </circle>
      <circle cx='4' cy='12' r='3'>
        <animate begin='0;spinner_z0Or.end' attributeName='cx' calcMode='spline' dur='0.5s' keySplines='.36,.6,.31,1' values='4;12' fill='freeze' />
        <animate begin='spinner_OLMs.end' attributeName='cx' calcMode='spline' dur='0.5s' keySplines='.36,.6,.31,1' values='12;20' fill='freeze' />
        <animate
          id='spinner_JsnR'
          begin='spinner_UHR2.end'
          attributeName='r'
          calcMode='spline'
          dur='0.5s'
          keySplines='.36,.6,.31,1'
          values='3;0'
          fill='freeze'
        />
        <animate id='spinner_Aguh' begin='spinner_JsnR.end' attributeName='cx' dur='0.001s' values='20;4' fill='freeze' />
        <animate begin='spinner_Aguh.end' attributeName='r' calcMode='spline' dur='0.5s' keySplines='.36,.6,.31,1' values='0;3' fill='freeze' />
      </circle>
      <circle cx='12' cy='12' r='3'>
        <animate begin='0;spinner_z0Or.end' attributeName='cx' calcMode='spline' dur='0.5s' keySplines='.36,.6,.31,1' values='12;20' fill='freeze' />
        <animate
          id='spinner_hSjk'
          begin='spinner_OLMs.end'
          attributeName='r'
          calcMode='spline'
          dur='0.5s'
          keySplines='.36,.6,.31,1'
          values='3;0'
          fill='freeze'
        />
        <animate id='spinner_UHR2' begin='spinner_hSjk.end' attributeName='cx' dur='0.001s' values='20;4' fill='freeze' />
        <animate begin='spinner_UHR2.end' attributeName='r' calcMode='spline' dur='0.5s' keySplines='.36,.6,.31,1' values='0;3' fill='freeze' />
        <animate begin='spinner_Aguh.end' attributeName='cx' calcMode='spline' dur='0.5s' keySplines='.36,.6,.31,1' values='4;12' fill='freeze' />
      </circle>
      <circle cx='20' cy='12' r='3'>
        <animate
          id='spinner_4v5M'
          begin='0;spinner_z0Or.end'
          attributeName='r'
          calcMode='spline'
          dur='0.5s'
          keySplines='.36,.6,.31,1'
          values='3;0'
          fill='freeze'
        />
        <animate id='spinner_OLMs' begin='spinner_4v5M.end' attributeName='cx' dur='0.001s' values='20;4' fill='freeze' />
        <animate begin='spinner_OLMs.end' attributeName='r' calcMode='spline' dur='0.5s' keySplines='.36,.6,.31,1' values='0;3' fill='freeze' />
        <animate begin='spinner_UHR2.end' attributeName='cx' calcMode='spline' dur='0.5s' keySplines='.36,.6,.31,1' values='4;12' fill='freeze' />
        <animate begin='spinner_Aguh.end' attributeName='cx' calcMode='spline' dur='0.5s' keySplines='.36,.6,.31,1' values='12;20' fill='freeze' />
      </circle>
    </svg>
  );
}

export function BarSpinner() {
  return (
    <div
      style={{ '--spinner-size': '24px', '--spinner-color': 'var(--primary-foreground)' } as React.CSSProperties}
      className='spinner_wrapper__zbFtL'
      data-version='v1'
    >
      <div className='spinner_spinner__fqUfx'>
        <div className='spinner_bar__VysK5' />
        <div className='spinner_bar__VysK5' />
        <div className='spinner_bar__VysK5' />
        <div className='spinner_bar__VysK5' />
        <div className='spinner_bar__VysK5' />
        <div className='spinner_bar__VysK5' />
        <div className='spinner_bar__VysK5' />
        <div className='spinner_bar__VysK5' />
        <div className='spinner_bar__VysK5' />
        <div className='spinner_bar__VysK5' />
        <div className='spinner_bar__VysK5' />
        <div className='spinner_bar__VysK5' />
      </div>
    </div>
  );
}

export function SCLoader({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' className={cn('animate-[spin_300ms_linear_infinite] stroke-current', className)} {...props}>
      <title>loader</title>
      {/* <circle cx='10' cy='10' r='8' stroke-width='2' stroke='var(--gray-700)' fill='none' stroke-linecap='round' /> */}
      <circle
        cx='10'
        cy='10'
        r='8'
        strokeWidth='2'
        fill='none'
        strokeDasharray='0.5 1px'
        strokeLinecap='round'
        pathLength='1'
        strokeDashoffset='0px'
      />
    </svg>
  );
}
