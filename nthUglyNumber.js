var nthUglyNumber = function(n) {
      const ans = [1]
      let i2 = 0;
      let i3 = 0;
      let i5 = 0;

      while(ans.length < n) {  
          let m2 = ans[i2]*2;
          let m3 = ans[i3]*3;
          let m5 = ans[i5]*5;

          const res = Math.min(m2, m3, m5)

          ans.push(res)

          if(res == m2) i2++;
          if(res == m3) i3++;
          if(res == m5) i5++;


      }
      return ans[ans.length - 1]  
    
    
    
};
