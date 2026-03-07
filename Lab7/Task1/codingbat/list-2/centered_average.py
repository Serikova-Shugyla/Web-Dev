def centered_average(nums):
    total = sum(nums)
    hi = max(nums)
    lo = min(nums)
    
    return (total - hi - lo) // (len(nums) - 2)